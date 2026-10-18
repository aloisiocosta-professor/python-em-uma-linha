validar=lambda n:n>=0;calcular=lambda n:n*4;apresentar=lambda n:f'Total: {n}';pedido=lambda n:apresentar(calcular(n)) if validar(n) else 'Quantidade invalida';print(pedido(2))
