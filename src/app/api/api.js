
export async function fetchProductList() {
	const response = await fetch('https://api.hyperteknoloji.com.tr/Products/List', {
	  method: 'POST',
	  headers: {
		"accept": "application/json",
		"content-type":" application/json; charset=utf-8",
		"authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMb2dpblR5cGUiOiIxIiwiQ3VzdG9tZXJJRCI6IjU1NzI0IiwiRmlyc3ROYW1lIjoiRGVtbyIsIkxhc3ROYW1lIjoiSHlwZXIiLCJFbWFpbCI6ImRlbW9AaHlwZXIuY29tIiwiQ3VzdG9tZXJUeXBlSUQiOiIzMiIsIklzUmVzZWxsZXIiOiIwIiwiSXNBUEkiOiIxIiwiUmVmZXJhbmNlSUQiOiIiLCJSZWdpc3RlckRhdGUiOiIzLzI1LzIwMjUgMTowMDo0OCBQTSIsImV4cCI6MjA1NDA4MDk3NSwiaXNzIjoiaHR0cHM6Ly9oeXBlcnRla25vbG9qaS5jb20iLCJhdWQiOiJodHRwczovL2h5cGVydGVrbm9sb2ppLmNvbSJ9.LKQny5FOFvokclJOy6eNlmR5TL0BtSAcp-GXt9LBqsk",
		
	  },
	});
  
	if (!response.ok) {
	  throw new Error('Ürün listesi alınamadı');
	}
	

	return response.json();
  }
  