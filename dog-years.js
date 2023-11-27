const dogYears = (planet, dage) => {
    switch (planet) {
        case "earth":
            return ((dage / 31557600) * 7).toFixed(2)
        case "mercury":
            return ((dage / 0.2408467) * 7).toFixed(2)
        case "venus":
            return ((dage / 0.61519726) * 7).toFixed(2)
        case "mars":
            return ((dage / 1.8808158) * 7).toFixed(2)
        case "jupiter":
            return ((dage / 11.862615) * 7).toFixed(2)
        case "saturn":
            return ((dage / 29.447498) * 7).toFixed(2)
        case "uranus":
            return ((dage / 84.016846) * 7).toFixed(2)
        case "neptune":
            return ((dage / 164.79132) * 7).toFixed(2)
    }
}

