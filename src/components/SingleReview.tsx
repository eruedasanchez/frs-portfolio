import Link from "next/link";
import { Star } from "lucide-react";
import { SingleReviewProps } from "@/types/types";

const SingleReview = ({testimonial, review} : SingleReviewProps) => {
    return (
        <div className="box flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-grey-700">{testimonial.name}</h6>
                    <p className="text-grey-500 text-sm">{testimonial.designation}</p>
                </div>
                <div className="flex gap-3">
                    {
                        review.socialLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.url}
                                className="text-brown-700 hover:scale-105 transition-transform duration-300"
                            >
                                <link.icon strokeWidth={0} fill="currentColor"/>
                            </Link>

                        ))
                    }
                </div>
            </div>
            <div>
                <div className="flex gap-1">
                    {
                        Array.from({length: 5}).map((_, index) => (
                            <Star
                                key={index}
                                size={20}
                                fill="currentColor"
                                className={`text-brown-700 ${index < review.stars ? 'opacity-100' : 'opacity-30'}`}
                            />
                        ))
                    }
                </div>
            </div>
            <p className="text-grey-600">{testimonial.review}</p>
        </div>
    )
}

export default SingleReview;