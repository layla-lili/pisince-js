const dogYears = (planet, dage) => {
    dage = (dage / 31557600)
    var dagep
    switch (planet) {
        case "earth":
            dagep = Number(((dage / 1.0) * 7).toFixed(2))
            break
        case "mercury":
            dagep = Number((((dage / 0.2408467) * 7).toFixed(2)))
            break
        case "venus":
            dagep = Number((((dage / 0.61519726) * 7).toFixed(2)))
            break
        case "mars":
            dagep = Number((((dage / 1.8808158) * 7).toFixed(2)))
            break
        case "jupiter":
            dagep = Number((((dage / 11.862615) * 7).toFixed(2)))
            break
        case "saturn":
            dagep = Number((((dage / 29.447498) * 7).toFixed(2)))
            break
        case "uranus":
            dagep = Number((((dage / 84.016846) * 7).toFixed(2)))
            break
        case "neptune":
            dagep = Number((((dage / 164.79132) * 7).toFixed(2)))
            break
    }
    return dagep
}
