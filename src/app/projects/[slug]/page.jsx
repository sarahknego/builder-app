import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export async function getStaticParams() {
    const paths = await builder.getAll("projects")
    return (
        paths.map((path) => {
            return {id: path.data.slug}
        })
    )
}

export default async function ProjectPage({params}) {
    console.log(params.slug)
    return (<p>Success!{params.slug}</p>)
}

