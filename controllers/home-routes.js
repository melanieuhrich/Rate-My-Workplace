

// // Create a new company search
// router.get('/:id', async (req, res) => {
//     try {
//       const newSearch = await Company.findByPk({
//         ...req.body,
//         user_id: req.session.user_id,
//       });
  
//       res.status(200).json(newSearch);
//     } catch (err) {
//       res.status(400).json(err);
//     }
// });

// // Create a new location search
// router.post('/', withAuth, async (req, res) => {
//     try {
//       const newPost = await Post.create({
//         ...req.body,
//         user_id: req.session.user_id,
//       });
  
//       res.status(200).json(newPost);
//     } catch (err) {
//       res.status(400).json(err);
//     }
// });