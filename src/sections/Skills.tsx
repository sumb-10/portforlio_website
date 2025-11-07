export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Python"]
    },
    {
      title: "Database",
      skills: ["TBD"]
    },
    {
      title: "Tools & Others",
      skills: ["GIT", "Figma"]
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-black pb-8 border-b border-black">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-black pb-2 border-b border-black">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li 
                  key={skill} 
                  className="text-black/70 hover:text-black hover:translate-x-1 transition-all cursor-default"
                >
                  · {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
