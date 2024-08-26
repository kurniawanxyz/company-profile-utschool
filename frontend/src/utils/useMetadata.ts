import { Metadata } from "next"

type useMetadataType ={
    title?: string,
    description?: string

}

export default function useMetadata({
    title = "UT SCHOOL",
    description = "description of utschool", 
}:useMetadataType):Metadata
{
    return {
        title,
        applicationName: title,
        icons: '/images/logo/ut/1.png',
        authors:{
            name: "DMDC PRODUCTION",
        }
    }
};
  