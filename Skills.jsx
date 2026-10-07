export default function Skills(){
 const skills=["HTML","CSS","JavaScript","React","Next.js","Tailwind CSS"];
 return <section className="p-10">
  <h2 className="text-4xl font-bold text-center">Skills</h2>
  <div className="flex flex-wrap gap-4 justify-center mt-8">
   {skills.map(s=><span key={s} className="bg-white/10 px-5 py-2 rounded-full">{s}</span>)}
  </div>
 </section>
}