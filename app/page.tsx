import { startOfMinute } from "date-fns/startOfMinute";
import { z } from "zod";

const schema = z.date().transform(startOfMinute);

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeStyle: "medium",
});

export default function Home() {
  const resultDate = schema.parse(new Date());
  return (
    <div className="min-h-screen flex items-center justify-center">
      {formatter.format(resultDate)}
    </div>
  );
}
