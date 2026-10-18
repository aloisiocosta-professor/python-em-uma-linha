from itertools import product;trilhas=list(product([-1,1],repeat=3));ruins=[t for t in trilhas if any(sum(t[:k])<0 for k in range(1,4))];print(len(trilhas),bool(ruins))
