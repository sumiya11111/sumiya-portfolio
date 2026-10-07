export default function Projects(){
 const projects=[
  "Personal Portfolio Website",
  "E-Commerce Website",
  "Task Management App",
  "Weather Dashboard"
 ];
 return <section className="p-10">
  <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
  <div className="grid md:grid-cols-2 gap-5">
   {projects.map(p=><div key={p} className="p-6 rounded-xl bg-white/10">{p}</div>)}
  </div>
 </section>
}