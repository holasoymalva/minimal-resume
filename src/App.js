import React, { useState } from 'react';
import { Edit2, Save, X, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "Your Name",
      title: "Your professional title and brief description of your expertise",
      location: "Your City, Country, Timezone",
      email: "your.email@example.com",
      phone: "+1 (555) 123-4567",
      linkedin: "linkedin.com/in/yourprofile",
      github: "github.com/yourusername",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    about: "Write a compelling summary about yourself, your experience, skills, and what you're passionate about. Describe your career journey, key achievements, and what makes you unique as a professional.",
    workExperience: [
      {
        company: "Company Name",
        type: "Remote/On-site/Hybrid",
        position: "Your Job Title",
        period: "Start Year - End Year",
        description: "Describe your key responsibilities, achievements, and technologies used. Highlight your impact and contributions to the company."
      },
      {
        company: "Previous Company",
        type: "Remote",
        position: "Previous Position Title",
        period: "Start Year - End Year",
        description: "Detail your role, accomplishments, and the skills you developed. Focus on quantifiable results and meaningful contributions."
      },
      {
        company: "Earlier Company",
        type: "",
        position: "Earlier Position",
        period: "Start Year - End Year",
        description: "Describe your responsibilities and learning experiences from earlier in your career."
      }
    ],
    education: [
      {
        institution: "University Name",
        degree: "Your Degree in Your Field of Study",
        period: "Start Year - End Year"
      }
    ],
    skills: ["Skill 1", "Skill 2", "Skill 3", "Technology 1", "Technology 2", "Framework 1", "Tool 1"],
    projects: [
      {
        name: "Project Name",
        description: "Brief description of what this project does and its purpose",
        tags: ["Technology", "Framework", "Type", "Additional Tag"]
      },
      {
        name: "Another Project",
        description: "Description of another project you've worked on",
        tags: ["Tech Stack", "Project Type", "Tool Used"]
      },
      {
        name: "Third Project",
        description: "Description of a third project showcasing different skills",
        tags: ["Different Tech", "Project Category", "Platform"]
      }
    ]
  });

  const [editData, setEditData] = useState(resumeData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...resumeData });
  };

  const handleSave = () => {
    setResumeData({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...resumeData });
    setIsEditing(false);
  };

  const updatePersonalInfo = (field, value) => {
    setEditData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const updateAbout = (value) => {
    setEditData(prev => ({ ...prev, about: value }));
  };

  const updateWorkExperience = (index, field, value) => {
    setEditData(prev => ({
      ...prev,
      workExperience: prev.workExperience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addWorkExperience = () => {
    setEditData(prev => ({
      ...prev,
      workExperience: [...prev.workExperience, {
        company: "",
        type: "",
        position: "",
        period: "",
        description: ""
      }]
    }));
  };

  const removeWorkExperience = (index) => {
    setEditData(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter((_, i) => i !== index)
    }));
  };

  const updateProject = (index, field, value) => {
    setEditData(prev => ({
      ...prev,
      projects: prev.projects.map((project, i) => 
        i === index ? { ...project, [field]: value } : project
      )
    }));
  };

  const addProject = () => {
    setEditData(prev => ({
      ...prev,
      projects: [...prev.projects, {
        name: "",
        description: "",
        tags: []
      }]
    }));
  };

  const removeProject = (index) => {
    setEditData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const updateSkills = (value) => {
    const skillsArray = value.split(',').map(skill => skill.trim()).filter(skill => skill);
    setEditData(prev => ({ ...prev, skills: skillsArray }));
  };

  const currentData = isEditing ? editData : resumeData;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto p-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              {isEditing ? (
                <input
                  type="text"
                  value={currentData.personalInfo.name}
                  className="text-3xl font-bold mb-2 w-full border border-gray-300 rounded px-2 py-1"
                />
              ) : (
                <h1 className="text-3xl font-bold mb-2">{currentData.personalInfo.name}</h1>
              )}
              
              {isEditing ? (
                <textarea
                  value={currentData.personalInfo.title}
                  className="text-gray-600 text-sm leading-relaxed w-full border border-gray-300 rounded px-2 py-1 h-20"
                />
              ) : (
                <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                  {currentData.personalInfo.title}
                </p>
              )}
              
              {isEditing ? (
                <input
                  type="text"
                  value={currentData.personalInfo.location}
                  className="text-gray-500 text-sm mt-2 w-full border border-gray-300 rounded px-2 py-1"
                />
              ) : (
                <p className="text-gray-500 text-sm mt-2">{currentData.personalInfo.location}</p>
              )}
            </div>
            
            <div className="ml-8">
              {isEditing ? (
                <input
                  type="url"
                  value={currentData.personalInfo.avatar}
                  placeholder="Avatar URL"
                  className="w-32 border border-gray-300 rounded px-2 py-1 mb-2"
                />
              ) : null}
              <img
                src={currentData.personalInfo.avatar}
                alt={currentData.personalInfo.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex gap-4 text-sm text-gray-500">
            {isEditing ? (
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-1">
                  <Mail size={16} />
                  <input
                    type="email"
                    value={currentData.personalInfo.email}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Phone size={16} />
                  <input
                    type="tel"
                    value={currentData.personalInfo.phone}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin size={16} />
                  <input
                    type="text"
                    value={currentData.personalInfo.linkedin}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Github size={16} />
                  <input
                    type="text"
                    value={currentData.personalInfo.github}
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-1">
                  <Mail size={16} />
                  <span>{currentData.personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone size={16} />
                  <span>{currentData.personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin size={16} />
                  <span>{currentData.personalInfo.linkedin}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Github size={16} />
                  <span>{currentData.personalInfo.github}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* About */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">About</h2>
          {isEditing ? (
            <textarea
              value={currentData.about}
              className="text-gray-700 text-sm leading-relaxed w-full border border-gray-300 rounded px-3 py-2 h-32"
            />
          ) : (
            <p className="text-gray-700 text-sm leading-relaxed">
              {currentData.about}
            </p>
          )}
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Work Experience</h2>
            {isEditing && (
              <button
                onClick={addWorkExperience}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
              >
                Add Experience
              </button>
            )}
          </div>
          
          <div className="space-y-6">
            {currentData.workExperience.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-100 pl-4 relative">
                {isEditing && (
                  <button
                    onClick={() => removeWorkExperience(index)}
                    className="absolute -left-2 top-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                )}
                
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    {isEditing ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={exp.company}
                          placeholder="Company"
                          className="font-bold border border-gray-300 rounded px-2 py-1 w-full"
                        />
                        <input
                          type="text"
                          value={exp.type}
                          placeholder="Type (e.g., Remote)"
                          className="text-gray-500 text-sm border border-gray-300 rounded px-2 py-1 w-full"
                        />
                        <input
                          type="text"
                          value={exp.position}
                          placeholder="Position"
                          className="font-medium border border-gray-300 rounded px-2 py-1 w-full"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold">{exp.company}</h3>
                          {exp.type && <span className="text-gray-500 text-sm">{exp.type}</span>}
                        </div>
                        <p className="font-medium text-sm">{exp.position}</p>
                      </>
                    )}
                  </div>
                  
                  <div className="text-right">
                    {isEditing ? (
                      <input
                        type="text"
                        value={exp.period}
                        placeholder="Period"
                        className="text-gray-500 text-sm border border-gray-300 rounded px-2 py-1"
                      />
                    ) : (
                      <span className="text-gray-500 text-sm">{exp.period}</span>
                    )}
                  </div>
                </div>
                
                {isEditing ? (
                  <textarea
                    value={exp.description}
                    placeholder="Description"
                    className="text-gray-600 text-sm leading-relaxed w-full border border-gray-300 rounded px-2 py-1 h-20"
                  />
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Education</h2>
          {currentData.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">{edu.institution}</h3>
                  <p className="text-sm text-gray-600">{edu.degree}</p>
                </div>
                <span className="text-gray-500 text-sm">{edu.period}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          {isEditing ? (
            <input
              type="text"
              value={currentData.skills.join(', ')}
              placeholder="Skills (comma separated)"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {currentData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* Projects */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Projects</h2>
            {isEditing && (
              <button
                onClick={addProject}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
              >
                Add Project
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentData.projects.map((project, index) => (
              <div key={index} className="relative">
                {isEditing && (
                  <button
                    onClick={() => removeProject(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm z-10"
                  >
                    ×
                  </button>
                )}
                
                <div className="border border-gray-200 rounded-lg p-4">
                  {isEditing ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={project.name}
                        placeholder="Project name"
                        className="font-bold text-lg border border-gray-300 rounded px-2 py-1 w-full"
                      />
                      <textarea
                        value={project.description}
                        placeholder="Project description"
                        className="text-gray-600 text-sm border border-gray-300 rounded px-2 py-1 w-full h-20"
                      />
                      <input
                        type="text"
                        value={project.tags.join(', ')}
                        placeholder="Tags (comma separated)"
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                      />
                    </div>
                  ) : (
                    <>
                      <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;