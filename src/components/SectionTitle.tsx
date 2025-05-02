interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ title, subtitle, center = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 inline-block relative">
        {title}
        <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}