import numpy as np;x=np.array([1.,0.,-1.,0.]);print(bool(np.allclose(np.fft.ifft(np.fft.fft(x)).real,x)))
