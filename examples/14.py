q=lambda xs:q([x for x in xs[1:] if x<xs[0]])+xs[:1]+q([x for x in xs[1:] if x>=xs[0]]) if xs else [];print(q([3,1,3,2]))
