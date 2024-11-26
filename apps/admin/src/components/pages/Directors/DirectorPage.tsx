/* eslint-disable react/no-children-prop */
"use client";
import Banner from "@/components/elements/Banner";
import { useRouter } from "next/navigation";
import { useGetDirector, useUpdateDirector } from "@/hooks/useDirector";
import { FieldApi, useForm } from "@tanstack/react-form";
import { DirectorType } from "@/types/DirectorType";
import Card from "@/components/elements/Card";
import Img from "@/components/elements/Img";
import { Input, TextArea } from "@/components/elements";
import { ChangeEvent } from "react";

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(",")}</em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}

const DirectorPage = () => {
  const backendurl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();
  const { isSuccess, isLoading, data } = useGetDirector();
  const mutateDirector = useUpdateDirector(data?.data.id as string)  

  const form = useForm<DirectorType>({
    onSubmit: async ({ value }) => {
      // console.log(value)
      mutateDirector.mutate({data: value})
    },
    defaultValues: {
      id: data?.data.id as string,
      name: data?.data.name as string,
      image1: data?.data.image1 as string,
      description: data?.data.description as string,
      image2: data?.data.image2 as string,
      image3: data?.data.image3 as string,
      message: data?.data.message as string,
      photo_profile: data?.data.photo_profile as string,
      video: data?.data.video as string,
      position: data?.data.position as string,
    },
  });

  return (
    <>
      <Banner title="Directors" />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="grid grid-cols-2 gap-5 p-5">
          {/* Name */}
          <form.Field
            name="name"
            children={(field) => (
              <Input
                label="Name"
                type="text"
                value={field.state.value || ""}
                onChange={(e) => field.handleChange(e.target.value)} name={""} />
            )}
          />

          {/* Position */}
          <form.Field
            name="position"
            children={(field) => (
              <Input
                label="Position"
                type="text"
                value={field.state.value || ""}
                onChange={(e) => field.handleChange(e.target.value)} name={""} />
            )}
          />

          {/* Message */}
          <form.Field
            name="message"
            children={(field) => (
              <TextArea
                name=""
                label="Message"
                value={field.state.value || ""}
                onChange={(e: any) => field.handleChange(e.target.value)}
              />
            )}
          />

          {/* Description */}
          <form.Field
            name="description"
            children={(field) => (
              <TextArea
                label="Description"
                value={field.state.value || ""}
                onChange={(e) => field.handleChange(e.target.value)} name={""} />
            )}
          />

          {/* Photo Profile */}
          <form.Field
            name="photo_profile"
            children={(field) => (
              <Card>
                <Img
                  className="w-full h-40 object-cover mb-5"
                  src={
                    field.state.value
                      ? process.env.NEXT_PUBLIC_API_URL + field.state.value
                      : "/images/illustration/404.png"
                  }
                  alt="Photo Profile Preview"
                />
                <Input
                  accept="image/*"
                  label="Photo Profile"
                  type="file"
                  name="photo_profile"
                  onChange={(e: any) => {
                    const file = e.target.files[0];
                    if (file) {
                      const previewUrl = URL.createObjectURL(file);
                      field.handleChange(previewUrl);
                    }
                  }}
                />
              </Card>
            )}
          />

          {/* Video */}
          {/* Video */}
          <form.Field
            name="video"
            children={(field) => (
              <Card>
                {field.state.value ? (
                  <video
                    className="w-full h-40 object-cover mb-5"
                    controls
                    src={field.state.value}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Video Preview
                  </div>
                )}
                <Input
                  accept="video/*"
                  label="Upload Video"
                  type="file"
                  name="video"
                  onChange={(e: any) => {
                    const file = e.target.files[0];
                    if (file) {
                      const previewUrl = URL.createObjectURL(file);
                      field.handleChange(previewUrl);
                    }
                  }}
                />
              </Card>
            )}
          />

        </div>

        {/* Images */}
        <div className="grid grid-cols-3 p-5 gap-5">
          {["image1", "image2", "image3"].map((image: any, index) => (
            <form.Field
              name={image}
              key={index}
              children={(field) => (
                <Card>
                  <Img
                    className="w-full h-60 object-cover mb-5"
                    src={
                      field.state.value
                        ?  field.state.value
                        : "/images/illustration/404.png"
                    }
                    alt={`Preview ${image}`}
                  />
                  <Input
                    accept="image/*"
                    label={`Header ${index + 1}`}
                    type="file"
                    name={image}
                    onChange={(e: any) => {
                      const file = e.target.files[0];
                      if (file) {
                        const previewUrl = URL.createObjectURL(file);
                        field.handleChange(previewUrl);
                      }
                    }}
                  />
                </Card>
              )}
            />
          ))}
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default DirectorPage;
