import React, { useEffect, useState } from 'react';
import { Button, Checkbox, DatePicker, Form, FormProps, Input, InputNumber, Select, SelectProps, Space, Upload, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useNavigate } from 'react-router-dom';
import { accountsService } from '../services/accounts.service';

type FieldType = {
    email: string;
    password: string;
    birthdate: Date;
    phone?: string;
};

const Register: React.FC = () => {

    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

        try {
            const res = await accountsService.register(values);

            if (res.status === 200) {
                message.success(`Your have registered successfully!`);
            }

            // go back
            navigate(-1);
        } catch (error: any) {
            message.error(error.response.data.message);
        }
    }

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Register</h2>
            <Form
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                    margin: "auto"
                }}
                layout="vertical"
            >
                <Form.Item<FieldType>
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            type: "email"
                        },
                    ]}
                >
                    <Input placeholder="Enter your email address" />
                </Form.Item>

                <Form.Item<FieldType>
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.Password placeholder="Enter your password" />
                </Form.Item>

                <Form.Item<FieldType>
                    name="birthdate"
                    label="Birthdate"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <DatePicker
                        style={{
                            width: "100%"
                        }} />
                </Form.Item>

                <Form.Item<FieldType>
                    name="phone"
                    label="Phone Number"
                >
                    <Input placeholder="Enter your phone number" />
                </Form.Item>


                <Form.Item style={{
                    textAlign: "center"
                }}>

                    <Space>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Space>
                </Form.Item>
            </Form >
        </>
    );
};

export default Register;