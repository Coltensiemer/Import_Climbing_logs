package main

import (
    "encoding/json"
    "net/http"
    "log"

		"logbookclimbing/backend/handlers/climbs"
		"logbookclimbing/backend/models"
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
		http.HandleFunc("/api/login". loginHandler)

    log.Println("🚀 Go server listening on http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
