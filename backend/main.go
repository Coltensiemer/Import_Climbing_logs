package main

import (
    "encoding/json"
    "net/http"
    "log"
)

type Message struct {
    Message string `json:"message"`
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(Message{Message: "Hello from Go backend!"})
}

func main() {
    http.HandleFunc("/api/hello", helloHandler)

    log.Println("🚀 Go server listening on http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
