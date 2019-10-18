User.create(
  email: 'admin@admin.com',
  password: 'password'
)

5.times do
  u = User.create(
    firstName: Faker::Artist.name,
    lastName: Faker::Name.last_name,
    userName: Faker::Science.element,
    email: Faker::Internet.free_email,
    password: 'password',
    image: Faker::Avatar.image(slug: nil, size: "50x200", format: "png", set: "set2"),
  )
  3.times do
    p = Post.create(
      title: Faker::Lorem.word,
      body: Faker::ChuckNorris.fact,
      author: Faker::GreekPhilosophers.name,
      image: Faker::Avatar.image(slug: nil, size: "50x200", format: "png", set: "set1"),
      date: Faker::Date.between(from: 20.days.ago, to: Date.today),
      user_id: u.id
      )
    2.times do 
      Comment.create(
        body: Faker::Lorem.sentence,
        date: Faker::Date.between(from: 20.days.ago, to: Date.today),
        user_id: u.id,
        post_id: p.id 
      )
      end
    end
  end

puts "1 admin acc. 5 user acc. 4 posts 2 comments"



