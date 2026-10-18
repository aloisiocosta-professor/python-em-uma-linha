import hashlib,json;dados=[1,2,3];artefato=json.dumps(dados,separators=(',',':'));print(hashlib.sha256(artefato.encode()).hexdigest()[:12])
