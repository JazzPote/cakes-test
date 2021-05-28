import { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Form, Input, Rate } from 'formik-antd';
import Message from 'antd/lib/message';
import Button from 'antd/lib/button';
import { useRouter } from 'next/router';
import styles from './AddCakeForm.module.scss';
import { postCakeValidationSchema as validationSchema } from '../../../utils/validationSchemas';

interface CakePayload {
  name: string;
  comment: string;
  yumFactor: string;
}

interface PostRequestOutcome {
  success?: boolean;
  error?: string;
}

const initialValues: CakePayload = {
  name: '',
  comment: '',
  yumFactor: '',
};

const loadingMessageKey = 'addCakeLoadingMessageKey';

function AddCakeForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [createCakeOutcome, setCreateCakeOutcome] = useState<PostRequestOutcome>();

  useEffect(() => {
    if (isLoading) {
      Message.loading({
        content: 'Submitting new cake...',
        key: loadingMessageKey,
      });
    } else {
      Message.destroy(loadingMessageKey);
    }
  }, [isLoading]);

  useEffect(() => {
    if (createCakeOutcome?.success) {
      Message.success('Cake successfully added');
      router.push('/');
    } else if (createCakeOutcome?.error) {
      Message.error(`Error: ${createCakeOutcome.error}`);
    }
  }, [createCakeOutcome]);

  const createCake = async (values: CakePayload) => {
    setIsLoading(true);
    try {
      await axios.post('/api/cakes', values);
      setIsLoading(false);
      setCreateCakeOutcome({ success: true });
    } catch (error) {
      setIsLoading(false);
      setCreateCakeOutcome({
        error: error.response?.data || 'Please try again later',
      });
    }
  };

  const onSubmit = async (values: CakePayload) => {
    setIsLoading(true);
    await createCake(values);
  };
  const formikProps = {
    initialValues,
    validationSchema,
    onSubmit,
  };
  return (
    <Formik {...formikProps}>
      <Form layout="vertical" className={styles.form}>
        <Form.Item name="name" label="Cake name">
          <Input name="name" placeholder="Name of the cake" />
        </Form.Item>
        <Form.Item name="comment" label="Comment">
          <Input.TextArea name="comment" placeholder="Comment about the cake" />
        </Form.Item>
        <Form.Item name="yumFactor" label="Yum factor">
          <Rate name="yumFactor" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
        <Button htmlType="reset">Reset</Button>
      </Form>
    </Formik>
  );
}

export default AddCakeForm;
