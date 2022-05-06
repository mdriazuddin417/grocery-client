import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-12 lg:py-10 p-54">
      <PageTitle title="Blog"></PageTitle>
      <h2 className="header mb-16">Blog</h2>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-x-32 gap-y-10">
          <div className="h-full shadow-lg rounded-lg p-10">
            <h4 className="text-xl mb-3 font-semibold">
              Difference between javascript and nodejs?
            </h4>
            <p className="text-gray-500">
              Javascript is a programing Language that is used for writing
              script on the website.Javascript can only be run in the
              browsers.It is basically used on the client-side . It is capable
              enough to add HTML and play with the DOM. Javascript is used
              frontend development. Node JS is a javascript runtime environment.
              We can run javascript outside the browser with help of Node Js. It
              is mostly used on the server-side . Node Js does not have
              capability to add HTML Tag.Node Js is used in server-side
              Development.HS256 and RS256 are two main algorithms we make use of
              in the header section of a JWT.
            </p>
          </div>
          <div className="h-full shadow-lg rounded-lg p-10">
            <h4 className="text-xl mb-3 font-semibold">
              What is the purpose of jwt and how does it work?
            </h4>
            <p className="text-gray-500">
              A JSON web token (JWT) is JSON Object which is used to securely
              transfer information over the web. It can be used for an
              authentication system and can also be used for information
              exchange. The token is mainly composed of header, payload,
              signature. This three parts are separated by dots(.).
            </p>
          </div>
          <div className="h-full shadow-lg rounded-lg p-10">
            <h4 className="text-xl mb-3 font-semibold">
              Differences between sql and nosql databases ?
            </h4>
            <p className="text-gray-500">
              SQL is the relational database management system.These database
              have fixed or static or predefined schema. these databases are not
              suited for hierarchical data storage. Vertical scalable Follows
              ACID property.SQL database include SQL, MySQL,Oracle. NoSQL is the
              Non-relational or distributed database system. They have dynamic
              schema. These database are best suited for hierarchical data
              storage.
            </p>
          </div>
          <div className="h-full shadow-lg rounded-lg p-10">
            <h4 className="text-xl mb-3 font-semibold">
              When should you use nodejs and when should you use mongodb?
            </h4>
            <p className="text-gray-500">
              Any project needs a programming environment and a runtime library
              that offers you basic programming tools and can compile or
              interpret your code . NodeJs is such as tool for the Javascript
              programming Language. and Other similar Language Python, Java,
              PHP,Then If your application needs the ability to persistently
              store data in a way that you can efficiently query or update it
              later, then you would typically use some form of database. Mongo
              DB is one such Database. Different Databases have different
              strengths and different ways of using then so it's a whole
              different question to choose the right database for what you're
              doing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
