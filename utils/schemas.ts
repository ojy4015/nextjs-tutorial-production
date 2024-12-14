// import * as z from 'zod'; // user input validation option
// import { ZodSchema } from 'zod';

// export const profileSchema = z.object({
//   // firstName: z.string().max(5, { message: 'max length is 5' }),
//   firstName: z.string().min(1, {
//     message: '이름은 최소1자 이상이어야 합니다.',
//   }),
//   lastName: z.string().min(1, {
//     message: '성은 최소1자 이상이어야 합니다.',
//   }),
//   username: z.string().min(2, {
//     message: '유저명은 최소2자 이상이어야 합니다.',
//   }),
// });

// export function validateWithZodSchema<T>(
//   schema: ZodSchema<T>,
//   data: unknown
// ): T {
//   const result = schema.safeParse(data);

//   if (!result.success) {
//     const errors = result.error.errors.map((error) => error.message);
//     throw new Error(errors.join(','));
//   }
//   return result.data;
// }

// export const imageSchema = z.object({
//   image: validateFile(),
// });

// function validateFile() {
//   const maxUploadSize = 1024 * 1024 * 5; //5MB
//   const acceptedFilesTypes = ['image/'];
//   return z
//     .instanceof(File)
//     .refine((file) => {
//       return !file || file.size <= maxUploadSize;
//     }, '파일 사이즈는 5MB 이하여야 합니다.')
//     .refine((file) => {
//       return (
//         !file || acceptedFilesTypes.some((type) => file.type.startsWith(type))
//       );
//     }, '이미지 파일만 선택할 수 있습니다.');
// }

// export const uploadProductImageSchema = z.object({
//   productImage: uploadProductImagevalidate(),
// });

// function uploadProductImagevalidate() {
//   const maxUploadSize = 1024 * 1024 * 10; //10MB
//   const acceptedFilesTypes = ['image/'];
//   return z
//     .instanceof(File)
//     .refine((uploadfiles) => {
//       return !uploadfiles || uploadfiles.size <= maxUploadSize;
//     }, '파일 사이즈는 10MB 이하여야 합니다.')
//     .refine((uploadfiles) => {
//       return (
//         !uploadfiles ||
//         acceptedFilesTypes.some((type) => uploadfiles.type.startsWith(type))
//       );
//     }, '이미지 파일만 선택할 수 있습니다test.');
// }

// // export const previewFilesSchema = z.object({
// //   // previewfiles: previewfilesvalidateFile(),
// // });

// // function previewfilesvalidateFile() {
// //   const maxUploadSize = 1024 * 1024; //1MB
// //   const acceptedFilesTypes = ['image/'];
// //   return z
// //     .instanceof(File)
// //     .refine((previewfiles) => {
// //       return !previewfiles || previewfiles.size <= maxUploadSize;
// //     }, '파일 사이즈는 1MB 이하여야 합니다.')
// //     .refine((previewfiles) => {
// //       return (
// //         !previewfiles ||
// //         acceptedFilesTypes.some((type) => previewfiles.type.startsWith(type))
// //       );
// //     }, 'preview이미지 파일만 선택할 수 있습니다.');
// // }

// export const productSchema = z.object({
//   title: z
//     .string()
//     .min(2, {
//       message: '타이틀은 최소 2자 이상입니다.',
//     })
//     .max(100, {
//       message: '타이틀은 최대 100자 이내입니다.',
//     }),
//   productType: z.string(),
//   // file: z.string(),
//   // preview: z.string(),
//   description: z.string().refine(
//     (description) => {
//       const wordCount = description.split(' ').length;
//       return wordCount >= 3 && wordCount <= 1000;
//     },
//     {
//       message: '설명은 3단어 이상 1000단어 이내입니다.',
//     }
//   ),
//   price: z.coerce
//     .number()
//     .int()
//     .min(0, {
//       message: '가격은 0보다 커야합니다.',
//     })
//     .max(1000, {
//       message: '가격은 1000보다 적어야합니다.',
//     }),
//   totalPages: z.coerce.number().int().min(0, {
//     message: '전체쪽수는 0보다 커야합니다.',
//   }),
//   gradeLevel: z.string(),
//   subjects: z.string(),
// });

// export const eduPaySchema = z.object({
//   pointTotal: z.coerce.number().int().min(0, {
//     message: '금액은 0보다 커야합니다.',
//   }),
//   pointPaid: z.coerce.number().int().min(0, {
//     message: '금액은 0보다 커야합니다.',
//   }),
//   sellerMessage: z.string().refine(
//     (description) => {
//       const wordCount = description.split(' ').length;
//       return wordCount >= 1 && wordCount <= 1000;
//     },
//     {
//       message: '1단어 이상 1000단어 이내입니다.',
//     }
//   ),
//   adminMessage: z.string().refine(
//     (description) => {
//       const wordCount = description.split(' ').length;
//       return wordCount >= 1 && wordCount <= 1000;
//     },
//     {
//       message: '1단어 이상 1000단어 이내입니다.',
//     }
//   ),
//   // demand: z.boolean(),
// });

// export const createProductsReviewSchema = z.object({
//   productId: z.string(),
//   rating: z.coerce.number().int().min(1).max(5),
//   comment: z
//     .string()
//     .min(3, {
//       message: '리뷰는 최소 3자 이상입니다.',
//     })
//     .max(1000, {
//       message: '리뷰는 최대 1000자 이내입니다.',
//     }),
// });
