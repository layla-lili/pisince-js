const dogYears = (planet, dage) => {
    dage = (dage / 31557600)
    switch (planet) {
        case "earth":
            return Number(((dage / 1.0) * 7).toFixed(2))
        case "mercury":
            return Number((((dage / 0.2408467) * 7).toFixed(2)))
        case "venus":
            return Number((((dage / 0.61519726) * 7).toFixed(2)))
        case "mars":
            return Number((((dage / 1.8808158) * 7).toFixed(2)))
        case "jupiter":
            return Number((((dage / 11.862615) * 7).toFixed(2)))
        case "saturn":
            return Number((((dage / 29.447498) * 7).toFixed(2)))
        case "uranus":
            return Number((((dage / 84.016846) * 7).toFixed(2)))
        case "neptune":
            return Number((((dage / 164.79132) * 7).toFixed(2)))
    }
}

