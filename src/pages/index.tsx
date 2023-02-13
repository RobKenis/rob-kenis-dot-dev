import DefaultLayout from "@/components/layouts/DefaultLayout";
import {Text} from "@nextui-org/react";

export default function Home() {

    return (
        <DefaultLayout>
            <Text
                h1
                size={100}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                I'm building this. Hang on!
            </Text>
        </DefaultLayout>
    )
}
