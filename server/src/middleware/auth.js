import jwt from 'jsonwebtoken';
import {Admin} from '../models/index.js';
export async function requireAdmin(req,res,next){try{const token=(req.headers.authorization||'').startsWith('Bearer ')?req.headers.authorization.slice(7):'';if(!token)return res.status(401).json({message:'Please sign in.'});const payload=jwt.verify(token,process.env.JWT_SECRET);const admin=await Admin.findById(payload.sub);if(!admin||!admin.active)return res.status(401).json({message:'Session expired.'});req.admin=admin;next();}catch{return res.status(401).json({message:'Session expired. Please sign in again.'});}}
