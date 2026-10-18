import numpy as np;rng=np.random.default_rng(42);x=rng.random(10000);print(bool(abs(x.mean()-0.5)<0.02))
