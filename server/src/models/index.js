import mongoose from 'mongoose';
const adminSchema=new mongoose.Schema({name:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,lowercase:true},passwordHash:{type:String,required:true,select:false},role:{type:String,default:'admin',enum:['admin']},active:{type:Boolean,default:true}},{timestamps:true});
const admissionSchema=new mongoose.Schema({
 reference:{type:String,required:true,unique:true,index:true},fullName:{type:String,required:true,trim:true},email:{type:String,required:true,lowercase:true},mobile:{type:String,required:true},dateOfBirth:{type:Date,required:true},gender:String,guardianName:String,address:{type:String,required:true},qualification:{type:String,required:true},previousExamDetails:String,programme:{type:String,required:true},academicSession:{type:String,required:true},additionalInfo:String,status:{type:String,enum:['Submitted','Under Review','Approved','Rejected','Additional Information Required'],default:'Submitted',index:true},adminNote:String,statusMessage:String,statusUpdatedAt:Date,documents:{tenth:{storageName:String,originalName:String,mimeType:String,size:Number},twelfth:{storageName:String,originalName:String,mimeType:String,size:Number},photo:{storageName:String,originalName:String,mimeType:String,size:Number},caste:{storageName:String,originalName:String,mimeType:String,size:Number}}
},{timestamps:true});
const courseSchema=new mongoose.Schema({name:{type:String,required:true,unique:true},level:{type:String,enum:['Undergraduate','Postgraduate','Diploma','Other'],required:true},description:String,eligibility:String,duration:String,available:{type:Boolean,default:false},verified:{type:Boolean,default:false}},{timestamps:true});
const facultySchema=new mongoose.Schema({name:{type:String,required:true},designation:{type:String,required:true},department:{type:String,required:true},qualification:String,biography:String,published:{type:Boolean,default:true},imageStorageName:String,imageOriginalName:String,imageMimeType:String,imageSize:Number},{timestamps:true});
const gallerySchema=new mongoose.Schema({title:String,category:String,storageName:{type:String,required:true},originalName:String,mimeType:String,size:Number,altText:String,published:{type:Boolean,default:true},uploadedBy:{type:mongoose.Schema.Types.ObjectId,ref:'Admin',required:true}},{timestamps:true});
const noticeSchema=new mongoose.Schema({title:{type:String,required:true},description:{type:String,required:true},category:{type:String,default:'General'},publicationDate:{type:Date,default:Date.now},published:{type:Boolean,default:false},createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'Admin',required:true}},{timestamps:true});
const sessionSchema=new mongoose.Schema({name:{type:String,unique:true,required:true},active:{type:Boolean,default:false}},{timestamps:true});
const settingsSchema=new mongoose.Schema({key:{type:String,unique:true,default:'public'},address:String,phone:String,email:String,officeHours:String,history:String,vision:String,mission:String},{timestamps:true});
const auditSchema=new mongoose.Schema({adminId:{type:mongoose.Schema.Types.ObjectId,ref:'Admin',required:true},action:String,entityType:String,entityId:String,details:String,ipAddress:String},{timestamps:true});
export const Admin=mongoose.model('Admin',adminSchema);
export const Admission=mongoose.model('Admission',admissionSchema);
export const Course=mongoose.model('Course',courseSchema);
export const Faculty=mongoose.model('Faculty',facultySchema);
export const GalleryImage=mongoose.model('GalleryImage',gallerySchema);
export const Announcement=mongoose.model('Announcement',noticeSchema);
export const AcademicSession=mongoose.model('AcademicSession',sessionSchema);
export const SiteSettings=mongoose.model('SiteSettings',settingsSchema);
export const AuditLog=mongoose.model('AuditLog',auditSchema);
