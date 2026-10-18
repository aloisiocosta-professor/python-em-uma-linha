import numpy as np;A=np.array([[2.,1.],[1.,3.]]);b=np.array([5.,5.]);x=np.linalg.solve(A,b);print(np.round(x,6).tolist(),bool(np.allclose(A@x,b)))
