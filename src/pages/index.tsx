import {Card, Grid, Row, Text} from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export default function Home() {

    const list = [
        {
            title: "Serverless on AWS",
            img: "/images/fruit-1.jpeg",
            action: "Learn more",
            link: '/serverless-on-aws'
        },
        {
            title: "Introduction to Kubernetes",
            img: "/images/fruit-8.jpeg",
            action: "Learn more",
            link: '/introduction-to-kubernetes'
        },
        {
            title: "Deploying with AWS CDK",
            img: "/images/fruit-5.jpeg",
            action: "Learn more",
            link: '/deploying-with-aws-cdk'
        },
    ];

    return (
        <Grid.Container gap={2} justify="flex-start">
            {list.map((item, index) => (
                <Grid xs={6} sm={6} md={4} lg={4} xl={4} key={index}>
                    <Card>
                        <Card.Body css={{p: 0}}>
                            <Card.Image
                                src={"https://nextui.org" + item.img}
                                objectFit="cover"
                                width="100%"
                                height={140}
                                alt={item.title}
                            />
                        </Card.Body>
                        <Card.Footer css={{justifyItems: "flex-start"}}>
                            <Row wrap="wrap" justify="space-between" align="center">
                                <Text b>{item.title}</Text>
                                <Text css={{color: "$accents7", fontWeight: "$semibold", fontSize: "$sm"}}>
                                    <Link block href={item.link}>
                                        {item.action}
                                    </Link>
                                </Text>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>
            ))}
        </Grid.Container>
    )
}
