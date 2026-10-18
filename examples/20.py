from itertools import product;print([(a,b) for a,b in product([False,True],repeat=2) if (a or b) and not a])
