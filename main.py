while True:
    print(input.acceleration(Dimension.Z))
    if input.acceleration(Dimension.Z) > 5: 
        if input.light_level() < 10 :
            light.set_all(light.rgb(255, 255, 0))
    else:
        light.set_all(light.rgb(0, 0, 0))
