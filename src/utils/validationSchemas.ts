import * as Yup from 'yup';

export const postCakeValidationSchema = Yup.object({
  name: Yup.string().required('Cake name required'),
  comment: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .max(200, 'Must be 200 characters or less')
    .required('Comment required'),
  yumFactor: Yup.number().min(1).max(5).integer().required("Don't forget to rate your cake!"),
});
