package models

type HostBase string

const (
    Aurora      HostBase = "auroraboardapp"
    Decoy       HostBase = "decoyboardapp"
    Grasshopper HostBase = "grasshopperboardapp"
    Kilter      HostBase = "kilterboardapp"
    Soill       HostBase = "soillboardapp"
    Tension     HostBase = "tensionboardapp2"
    Touchstone  HostBase = "touchstoneboardapp"
)

var WebHosts = map[HostBase]string{
    Aurora:      "https://auroraboardapp.com",
    Decoy:       "https://decoyboardapp.com",
    Grasshopper: "https://grasshopperboardapp.com",
    Kilter:      "https://kilterboardapp.com",
    Soill:       "https://soillboardapp.com",
    Tension:     "https://tensionboardapp2.com",
    Touchstone:  "https://touchstoneboardapp.com",
}

