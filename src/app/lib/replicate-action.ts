"use server";

import Replicate from "replicate";

export async function generateImageAction(prevState: any, formData: FormData) {
  "use server";

  const replicate = new Replicate();

  const input = {
    prompt: formData.get("prompt"),
    //   "imagine a setting where professional man wearing suits are sitting on a round table and seem dicussing thouroughly about an important topic",
  };

  const output = await replicate.run(
    "bytedance/sdxl-lightning-4step:5599ed30703defd1d160a25a63321b4dec97101d98b4674bcc56e41f62f35637",
    { input }
  );
  console.log(output);

  return output;
}
