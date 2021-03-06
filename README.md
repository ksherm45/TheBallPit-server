# TheBallPit-server
# Read Me

**The Ball Pit**

**A collective of ideas, activities, and recipes to help people destress and make it through the day.**

-**404: **A page that will be reached if a user tries to go to a page that does not exist.

**Sign up: **where the anon user can create an account so they can save balls

**Login: **Where the user will log into their pre-existing account

**Logout: **Where the user will exit the platform so nobody else can use their account

**Home: **A page where all of the activities are listed and can be clicked and inspected.

**Ball page (destress activity): **a documented routine, recipe, activity or mantra that a previous user has entered to help alleviate stress. It will also show peoples comments (potential

**Profile: **where you can see all of the Balls you have collected and also all of the Balls you have posted

**Comments: **The ability to engage with other peoples posts and let them know how much the activity has helped, or variations that you added.

**Random Ball:** when you are feeling indecisive a random ball will be generated for you


**BACKLOG**

**stripe donations option**


**CLIENT**

Routes

- Homepage /
- Signup form /auth/signup
- Login form /auth/login
- Profile /profile
- Ball /ball/:id
- Random ball /ball/:id
- Logout form /auth/logout
- 404

**COMPONENTS**

- Signup
- LogIn
- Homepage
- Profile
- Logout
- Ball
- RandomBall
- 404

**MODELS**

- UserModel:
    - user: String, Must be unique ( key for populating data )
    - email: String, Must be unique and validated
    - password: String ( hashed )
    - post created: ref to BallModel
    - post upvoted: ref to BallModel ( *optional )
    - comment: refs to CommentModel
- BallModel:
    - user: String ( key for populating data )
    - Sentence: String
    - comments: ref to CommentModel
- CommentModel:
    - user: String ( key for populating data )
    - Sentence: String
    - timeCreated: Date?

**BACKEND ROUTES**

- GET /auth/signup
- POST /auth.signup
    - body:
        - username
        - email
        - password
- POST /auth/login
    - body:
        - username
        - password
- POST /auth/logout
    - body: thank you text
- POST /user/profile
    - body:
        - Your posted “Balls”
        - Interacted with (saved)
- DELETE /user/profile/balls
- POST /random/:ballId
