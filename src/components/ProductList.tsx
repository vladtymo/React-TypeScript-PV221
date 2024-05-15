import React, { useEffect, useState } from 'react';
import { Button, Popconfirm, Space, Table, Tag, message } from 'antd';
import type { TableProps } from 'antd';
import { ProductModel } from '../models/product.model';
import { productsService } from '../services/products.service';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const getColumns = (deleteHandler: (id: number) => void): TableProps<ProductModel>['columns'] =>
    [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            sorter: {
                compare: (a, b) => a.id - b.id, // less <0 equsls 0> bigger
            },
        },
        {
            title: 'Image',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
            render: (text, record) => <img style={imageStyles} src={text} alt={record.name} />
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href='/'>{text}</a>,
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name)
            },
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text) => <span>{text}$</span>,
            sorter: {
                compare: (a, b) => a.price - b.price
            },
        },
        {
            title: 'Category',
            dataIndex: 'categoryName',
            key: 'categoryName'
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
            render: (text) => <span>{text}%</span>,
            sorter: {
                compare: (a, b) => a.discount - b.discount
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`edit/${record.id}`}>
                        <Button icon={<EditOutlined />}></Button>
                    </Link>
                    <Popconfirm
                        title="Delete the product"
                        description={`Are you sure to delete ${record.name}?`}
                        onConfirm={() => deleteHandler(record.id)}
                        okText="Yes"
                        cancelText="No"
                        placement="left"
                    >
                        <Button danger icon={<DeleteOutlined />}></Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

const ProductList: React.FC = () => {

    const [products, setProducts] = useState<ProductModel[]>([]);

    const loadProducts = async () => {
        const response = await productsService.get();
        setProducts(response.data);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    const deleteProduct = async (id: number) => {
        console.log("Deleting product: ", id);

        const response = await productsService.delete(id);
        if (response.status === 200) {

            setProducts(products.filter(x => x.id !== id));
            message.success(`Product deleted successfully!`);
        }
    };

    return (
        <Table columns={getColumns(deleteProduct)} dataSource={products} />
    );
}

export default ProductList;

const imageStyles: React.CSSProperties = {
    width: 55,
    height: 55,
    objectFit: "cover",
    borderRadius: 6
}