
const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information", label: "2. Information We Collect" },
  { id: "usage", label: "3. How We Use Your Data" },
  { id: "storage", label: "4. Data Storage & Security" },
  { id: "thirdparty", label: "5. Third-Party Partners" },
  { id: "camera", label: "6. Camera & AR Privacy" },
  { id: "children", label: "7. Children’s Privacy" },
  { id: "rights", label: "8. Your Global Rights" },
  { id: "contact", label: "9. Contact Us" },
  { id: "deletion", label: "10. Data Deletion Request" },
];

export default function PolicySidebar() {
  return (
    <aside className="hidden lg:block w-64 pr-8">
      <div className="sticky top-28">
        <h3 className="text-sm font-semibold mb-4 text-gray-500 uppercase">
          Privacy Policy
        </h3>

        <nav className="flex flex-col gap-3 text-sm">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-gray-600 hover:text-green-600 transition"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}