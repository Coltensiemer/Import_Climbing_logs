package handlers

import (
    "bytes"
    "encoding/json"
    "errors"
    "fmt"
    "io"
    "net/http"

    "logbookclimbing/backend/models"
)

type LoginRequest struct {
    Username string `json:"username"`
    Password string `json:"password"`
    TOU      string `json:"tou"`
    PP       string `json:"pp"`
    UA       string `json:"ua"`
}

func Login(board models.HostBase, username, password string) (string, error) {
    webHost, ok := models.WebHosts[board]
    if !ok {
        return "", errors.New("invalid board")
    }

    loginReq := LoginRequest{
        Username: username,
        Password: password,
        TOU:      "accepted",
        PP:       "accepted",
        UA:       "app",
    }

		// Marshal the login request into JSON
    body, err := json.Marshal(loginReq)
    if err != nil {
        return "", err
    }

		// Send the login request to the board's web host
		// The endpoint is assumed to be /sessions for creating a session
    resp, err := http.Post(fmt.Sprintf("%s/sessions", webHost), "application/json", bytes.NewBuffer(body))

    if err != nil {
        return "", err
    }
		// Ensure the response body is closed after reading
    defer resp.Body.Close()

    if resp.StatusCode < 200 || resp.StatusCode >= 300 {
        return "", fmt.Errorf("login failed: %s", resp.Status)
    }

    respBody, err := io.ReadAll(resp.Body)
    if err != nil {
        return "", err
    }

    var respData map[string]interface{}
    if err := json.Unmarshal(respBody, &respData); err != nil {
        return "", err
    }

    session, ok := respData["session"].(string)
    if !ok {
        return "", errors.New("session not found in response")
    }

    return session, nil
}