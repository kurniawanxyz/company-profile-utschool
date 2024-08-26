import { Metadata } from "next"

type useMetadataType ={
    title?: string,

}

export default function useMetadata({
    title
}:useMetadataType):Metadata
{
    return {
        title: title??"UTSCHOOL",
        applicationName: title,
        icons: '/images/logo/ut/1.png',
        authors:{
            name: "DMDC PRODUCTION",
        }
    }
};
  