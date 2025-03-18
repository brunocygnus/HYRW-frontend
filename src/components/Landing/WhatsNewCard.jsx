import {Card, CardHeader, CardBody, Image, Button} from "@heroui/react";

export default function WhatsNewCard({ content }) {
     const formatDate = (dateString) => {
       const date = new Date(dateString);
       return new Intl.DateTimeFormat("en-US", {
         month: "long",
         day: "numeric",
         year: "numeric",
       }).format(date);
     };
  return (
    <div>
      <Card className='py-2 bg-white w-80 rounded-xl max-w-sm'>
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
          <Image
            alt={content.title}
            className='object-cover rounded-xl w-80 h-64'
            src={content.img}
          />
        </CardHeader>
        <CardBody className='py-2 items-center'>
          <h4 className='font-bold font-DM text-xl'>{content.title}</h4>
          <p className='font-inter text-gray-500'>
            {formatDate(content.date)} - {content.comments.length} comments
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
