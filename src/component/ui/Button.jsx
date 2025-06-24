function Button({
  children,
  size = "md",
  color = "primary",
  variant = "solid",
  ...props
}) {
  const baseClasses = "rounded font-medium focus:outline-none transition";

  const sizeClasses = {
    xs: "px-3 py-1 text-[13px]",
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const colorClasses = {
    primary: {
      solid: "bg-orange-400 text-white hover:bg-orange-700",
      outline: "border border-orange-600 text-orange-600 hover:bg-orange-500 ",
      ghost: "text-black hover:text-gray-600 hover:[&_svg]:text-black",
    },
    secondary: {
      solid: "bg-purple-700 text-white hover:bg-purple-500",
      outline: "border border-purple-700 text-gray-800 hover:bg-gray-100",
      ghost: "text-gray-700 hover:bg-gray-200",
    },
  };

  const classes = [
    baseClasses,
    sizeClasses[size],
    colorClasses[color][variant],
  ].join(" ");

  return (
    <button className={classes} {...props}>
      <span className={"flex items-center gap-2 w-[max-content]"}>
        {children}
      </span>
    </button>
  );
}

export default Button;
