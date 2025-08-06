import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <h1 className="text-5xl font-bold mb-4 sm:text-7xl">
        Utenzo <span className="text-primary">Shopify</span> Theme
      </h1>
      <h1 className="text-3xl font-bold mb-4 sm:text-5xl">
        Complete Documentation Guide
      </h1>
      <p className="mb-8 sm:text-md max-w-[800px] text-muted-foreground">
        Comprehensive documentation for the Utenzo Shopify theme. Learn how to install, customize, 
        and get the most out of your premium Shopify theme with our detailed guides and support resources.
      </p>
      <div>
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({
            className: "px-6 !font-medium",
            size: "lg",
          })}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
