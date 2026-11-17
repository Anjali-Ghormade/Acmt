import {z} from 'zod';
export const loginSchema=z.object({email:z.string().email().max(254),password:z.string().min(1).max(200)});
export const admissionSchema=z.object({
 fullName:z.string().trim().min(2).max(120),email:z.string().email().max(254),
 mobile:z.string().regex(/^[+0-9()\\-\\s]{8,20}$/),dateOfBirth:z.string().refine(v=>!Number.isNaN(Date.parse(v))),
 gender:z.string().max(40).optional().default(''),guardianName:z.string().max(120).optional().default(''),
 address:z.string().trim().min(5).max(500),qualification:z.string().trim().min(2).max(150),
 previousExamDetails:z.string().max(1000).optional().default(''),programme:z.string().trim().min(2).max(150),
 academicSession:z.string().trim().min(4).max(30),additionalInfo:z.string().max(1000).optional().default('')
});
export const courseSchema=z.object({name:z.string().trim().min(2).max(150),level:z.enum(['Undergraduate','Postgraduate','Diploma','Other']),description:z.string().max(1200).optional().default(''),eligibility:z.string().max(500).optional().default(''),duration:z.string().max(100).optional().default(''),available:z.coerce.boolean().optional().default(false),verified:z.coerce.boolean().optional().default(false)});
export const facultySchema=z.object({name:z.string().trim().min(2).max(120),designation:z.string().min(2).max(120),department:z.string().min(2).max(120),qualification:z.string().max(250).optional().default(''),biography:z.string().max(1200).optional().default(''),published:z.coerce.boolean().optional().default(true)});
export const noticeSchema=z.object({title:z.string().trim().min(3).max(180),description:z.string().trim().min(3).max(5000),category:z.enum(['Admission','Academic','Examination','Events','General']).default('General'),publicationDate:z.string().optional(),published:z.coerce.boolean().default(false)});
