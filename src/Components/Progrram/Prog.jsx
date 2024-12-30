const posts = [
  {
    id: 1,
    title: 'Civil Engineering',
    href: '#',
    description:
      'Explore the art and science of designing, constructing, and maintaining the physical and naturally built environment.',
    date: 'Offered Since: Jan 2000',
    datetime: '2000-01-01',
    category: { title: 'Engineering', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdmlsJTIwZW5naW5lZXJpbmd8fDB8fHx8MTY4MDMzNzQ3Mg&ixlib=rb-4.0.3&q=80&w=400',
  },
  {
    id: 2,
    title: 'Computer Science',
    href: '#',
    description:
      'Dive into the world of algorithms, software development, and cutting-edge technology that drives innovation.',
    date: 'Offered Since: Sep 2005',
    datetime: '2005-09-01',
    category: { title: 'Technology', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHx8fDE2ODAzMzc1NTE&ixlib=rb-4.0.3&q=80&w=400',
  },
  {
    id: 3,
    title: 'Accounting',
    href: '#',
    description:
      'Master the principles of financial and managerial accounting to succeed in the business world.',
    date: 'Offered Since: May 2010',
    datetime: '2010-05-01',
    category: { title: 'Business', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1556740772-1a741367b93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFjY291bnRpbmd8fDB8fHx8MTY4MDMzNzYxNw&ixlib=rb-4.0.3&q=80&w=400',
  },
];

export default function Prog() {
  return (
    <>
      <hr />
      <div className="bg-gray-100 py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-5xl font-semibold tracking-tight text-blue-800 sm:text-7xl uppercase text-center">
            Popular Programs
          </h2>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>{post.title}</a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm text-gray-600">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
