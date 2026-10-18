arredondar=lambda f:lambda x:round(f(x),2);inverso=arredondar(lambda x:1/x);print(inverso(3))
