const BASE=(import.meta.env.VITE_API_URL||'http://localhost:5000/api').replace(/\/$/,'');
export const token=()=>localStorage.getItem('atash_admin_token')||'';
export const saveToken=t=>localStorage.setItem('atash_admin_token',t);
export const clearToken=()=>localStorage.removeItem('atash_admin_token');
export async function api(path,options={}){const headers={...(options.body instanceof FormData?{}:{'Content-Type':'application/json'}),...(options.headers||{})};if(token())headers.Authorization=`Bearer ${token()}`;const r=await fetch(BASE+path,{...options,headers});const d=await r.json().catch(()=>({}));if(!r.ok){if(r.status===401)clearToken();throw new Error(d.message||'Request failed')}return d}
export {BASE};
