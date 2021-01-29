while (true) {
    console.log(input.acceleration(Dimension.Z))
    if (input.acceleration(Dimension.Z) > 5) {
        if (input.lightLevel() < 10) {
            light.setAll(light.rgb(255, 255, 0))
        }
        
    } else {
        light.setAll(light.rgb(0, 0, 0))
    }
    
}
