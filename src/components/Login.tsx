import React, { } from 'react';
import { Button, Form, FormProps, Input, Space, message } from 'antd';
import { accountsService } from '../services/accounts.service';
import { useNavigate } from 'react-router-dom';
import { tokensService } from '../services/tokens.service';
import { useAppDispatch } from '../redux/hooks';
import { login } from '../redux/slices/account.slice';

type FieldType = {
    email: string;
    password: string;
};

const Login: React.FC = () => {

    const navigate = useNavigate();
    const [form] = Form.useForm();

    // const { login } = useContext(AccountContext);
    const dispatch = useAppDispatch();

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {

        console.log(values);

        try {
            const res = await accountsService.login(values);

            if (res.status === 200) {
                message.success(`Your have logged in successfully!`);

                tokensService.save(res.data);

                const payload = tokensService.getAccessTokenPayload();

                if (payload != null) {
                    // ---- working with state
                    //login(payload?.email ?? null);
                    dispatch(login(payload.email));
                }

                // go back
                navigate(-1);
            }

        } catch (error: any) {
            message.error(`Invalid login or password!`);
            console.log(error.response.data.message);
        }
    }

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Login</h2>
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

                <Form.Item style={{
                    textAlign: "center"
                }}>

                    <Space>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Space>
                </Form.Item>
            </Form >
        </>
    );
};

export default Login;