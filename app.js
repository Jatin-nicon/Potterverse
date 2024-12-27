let search = document.querySelector('#search')
let searchType = document.querySelector('#search-type')
let header = document.querySelector('header')
let searchButton = document.querySelector('#search-button')
let loadMore = document.querySelectorAll('.loadmore')




function changeHeaderHeight() {
    let height = header.offsetHeight
    let mainContent = document.querySelector('.main-content')
    mainContent.style.paddingTop = `${height}px`
}


function handleSearch() {
    const query = search.value.trim();
    const type = searchType.value.trim();
    search.value = ''
    if (query) {
        // Redirect to the dynamic page with the query as a URL parameter
        window.location.href = `searchQuery/search.html?query=${encodeURIComponent(query)}&type=${encodeURIComponent(type)}`;
    } else {
        alert("Please enter a search query!");
    }
}


let booksID = ['bb39c344-d3a4-4598-a3d2-dbdabfe9b068', '47619ef9-488d-4bc8-9536-15dd960c781d', '2a3ce707-b2c3-4d59-8b7a-981ffa47c8d3',
    '9f6e84f8-381b-44fb-8c85-9690e6415df7', '1c7fbfc9-d01f-49cd-b32b-45c4462acfec', '3a9954ed-7d8c-4368-8fca-e9277efdaaa8',
    '6751e7f7-a8b7-488b-bde7-8606822d2338']

let moviesID = ['a602e2dd-0536-4184-9d42-6f835e7be7a5', 'dbd48b5c-c79b-425e-a26e-1f108db39a2d', '37c7dbe1-d8bf-402d-983a-78e81d3479bc',
    '6c6ff17d-256d-465f-9946-8ab582d2d472', '678d2264-9c10-4eaa-9b9c-7f70fc331614', 'c86eb174-7440-4bd8-bece-2ac8a5505b9f',
    '541f41dd-d2c4-4995-ba1a-346cf704297f', 'd5476b0e-b5ef-453a-af00-41ed0ec9789f', 'b19d89bb-fe49-4ca0-b31b-f3e9addaede6',
    '1943508b-2eed-4d3a-8445-1102058ee981', 'bb71cc0d-32b7-4a05-876b-4774064a5cec']

let charactersID = ['4f1bd473-97e0-4d8f-9938-32406ff570c9', '13b01ac6-3ad3-461e-bacf-7963d57abc17', 'cb292f26-c09e-4212-a5fb-6199346273d4',
    'c7f6df36-995b-4236-8a14-af92cd044ef0', 'dce0ba55-ffbe-4349-b7fb-fc83ac85a22e', 'c1b4e368-4fe0-4805-88e5-4b88e565d7b1',
    '6eb7b08e-9268-451f-9ed1-d9f6e4b749a2', '1041707f-7582-4afc-bcd6-2b931300aff0', '1f7be827-70a2-4845-a2c8-3fe9c9becb1c',
    '584d6831-a44c-45a7-944d-f0e0c67977a2', 'ef36fd67-39f4-4c6e-a3b5-9ac2fec3a1ce', '448e0fff-ba30-47bf-b815-8abad12837f7',
    '195d13ae-8ed9-4866-9d8c-ab53fcc7e88e', 'd4297a77-80a5-41b5-bf06-80124a74b773', '84aa6012-d8dc-4728-9630-0b73430f1382',
    '85d8449e-2a49-477a-ae50-a4ced597aca6', 'f9f5e15a-5cc5-4660-bfd7-38c3849e976a', '3118fcb7-d807-4849-89ef-0d929486f384',
    'c3e73383-319f-4ff4-bdbb-3e588962366e', '0c45dedc-087b-46e1-82b1-65c91b5ee577', '9b3311a6-e10d-4abf-b642-4c2c470b982f',
    'e6d5a42a-b244-4683-b970-ad50b66b0994', '92909dcf-b7ea-47b6-a3c7-80890fb2c36d', '8e3a24b1-2e92-47b8-bed6-b3dbba3c81da',
    'b0bc53e2-59bd-4c9b-b52b-37869feec100', '116d6644-a317-4ba7-b97e-3f5d51f30019', 'cbe34bc4-a09b-4fbd-92ec-7574e0741a6e',
    '1dc16e40-78a5-4d8d-b104-e49e551008ec', '46139d77-8185-442e-b27d-f76306f2ce77', '3237eb1a-b085-4830-b820-c053d68006fd',
    '27752126-5129-4a86-b5f3-77c64f279ae5', 'b2e686dc-808b-42b3-adcd-3938ffaecb18', '166ce051-c55b-4ba2-972d-eee2bf90fcf1',
    '7098f411-7b30-41ef-bb6f-486ba4fc5359', 'd0e78eb3-a6ef-46dd-98b0-3b893c405f52', 'd09307c2-4d4e-4a75-a961-8cdd9ea6403b',
    '675788f6-d991-4fb0-a09b-f2c4aa56062e', '0f9789da-945a-4b14-a829-ab0fbd8f26fc', '9ac5c141-60aa-4b2d-8a5b-d0efc826d70e',
    '96cba961-150d-4644-9973-92b615bcafe2', '0cc4444b-cfb7-43e7-850a-13e0c3f2963d', 'b1311533-c2ce-4fd2-bacd-deb54da04949',
    '5cbab7ec-a01e-4cd9-90c0-1a5db7c46d35', 'e0fa0495-ab28-46b5-bcd0-a6f526f3621a', '62cd8fb7-553d-441a-aa6c-5ca04d0885ef',
    '7ce30d42-4e73-46c7-b335-5b748507b447', '7174de67-1b4c-4310-ba57-d470d1cf56c8', '1be94232-f79c-49fb-807a-389a9012ac28',
    'd54fe25c-23ba-4812-9566-224bec9f6034', 'a0b2358f-4a78-46aa-9ba2-e8f9b5b4b3d7', '7d736375-5d2d-4783-8eca-5840696eec72',
    'b9896316-7530-4c9a-98df-efa776c34ce8', '62b3a50f-945f-405b-86ba-50a59030bef6', '390ad1fe-76e9-425a-a2ef-1b4e71c1c495',
    '0a4c49a7-8ed6-4cd4-af0e-5953d528f895', '14ea42e0-efd4-4846-a3bd-1db5199abd2a', '294a3780-bd61-490e-bd73-950b88c7e7d2',
    '487a37f4-bf6e-4ad3-8905-4acf4119ecda', '5479aa9b-3ea3-4e96-94d3-bd9a9ca58065', 'c508d2b9-1d2e-4e7c-b153-d2ae47c39187',
    '555a0011-bc27-4462-9bb7-43ce552c88cd', '8dcb53b0-7470-456e-a28e-46a0f9838b00', 'e6d06e36-982e-4d6d-bc59-c580fdbd1c97',
    '22a33f78-c18d-4a63-a3a3-9dcf74d6e7bc', 'bab26726-f6d1-4aab-bfa8-44b56d6eef6c', '97f6646d-e8e1-4833-ac81-0853f89af2e1',
    'c9859f9f-1611-48ac-a164-dc0c226a3f22', '069533b8-b0a3-4e69-ae3b-07757ac45cb2', '35d1fc53-4f41-488f-a382-24fd8c77af19',
    'bb8a6cc0-e599-47c7-be36-6b1ec4fb81a3', '111043b5-107b-4fcd-be51-79a58fdbd6cf', 'd917a419-ca47-4977-a1ac-370bdd32900f',
    '40617b9d-8c0d-41c5-9266-df27d612b21b', 'e6448532-8b71-4ebe-ae4a-b5c30d3ae1f3', '85a3a1a1-0ebc-43c7-9c34-8e6222237e03',
    '2f1de524-9096-4a28-8785-28f08229dc9c', 'c9c8da40-29a3-4de5-8532-9e802d0bd90e', '4dd02a5b-a79e-4e47-a7b3-120602c116ca',
    'd3aad83f-1303-46e8-901a-ff4090290fd5', '74655482-cd50-4050-b8a1-5711c540f582', '4105ade9-10f4-4e79-8995-1898f868cb69',
    'fe8989bd-ddbd-402f-ab69-515ae0c2b5eb', 'ccc4c6cd-1f54-4195-880d-b89e504213ab', '79b93c8b-6404-47bc-943c-acde84898854',
    '11eddd6e-fc85-461d-9bf7-da32b4b286a3', '151d4507-8f7c-4cb9-b631-4d96872152b1', '7a40ffbc-d004-4710-8646-5141189a077c',
    'f882549d-a0ec-4e05-8dfb-6574fb9c18ea', '2ad32561-2804-4a44-b1ad-40b560a902bb', '234563f3-0662-4694-b16e-a2fecdfe3fd5',
    'efc97131-65ec-46c7-811c-a84ad146cc64', '7b47b8ea-111e-42ef-b0b7-53da151002d7', '7c36b262-31c3-4bfd-9c3f-3edd8ebb4c1b',
    'd1f94573-614b-4e67-a372-2ff5ef641456', '28e65fc2-653d-4e4a-a3cd-afa67e50bbd5', '2303203e-e5ea-4a7d-a1f9-c21b9c4bd6ce',
    'dde712de-4fce-487f-a365-e15bf01d31ce', '1d9f49ca-44ec-4aed-bbe2-72713710d3c0', '13fdb092-fca1-464c-8e13-a40049f6c66b',
    '8b7e8ccb-f2ef-42b0-a4cd-fb3c2572e619']

let spellsID = ['0f7c210d-b035-4442-ad1f-35fed3014fb5', 'c0a1ad7f-0ea5-4908-bc29-935853166ce1', '3bdc8dd4-2f73-46d8-bb89-4dff164ef306',
    '8def9ea1-69dc-4e31-8dc2-5ab60385fd20', 'b582a652-1f60-4c2b-a927-16385eb2d281', '6f7eecee-5659-41b3-9694-6c64f52e6bbd',
    '6a832f90-5ccb-468b-ab98-d7793b9ceaa2', 'bdfde960-0584-49b0-8ae4-26f48e868e71', '3b5012cb-c536-4247-a993-db9f15ab8ac2',
    '84925262-66dc-4a37-ada3-58c075c14e44', '669d3590-6a1f-4ea9-9c06-09534bc90b69', '5a489a93-c742-4c7c-8423-2d383f2f6f3a',
    'f3bb38ca-c49b-4721-9ee4-6f1f0a919814', '8a206b25-3603-4fb9-bffe-3b41efd0d647', '411286ed-4112-4da9-b5b1-92ab6fb0d5df',
    'bc67d5f0-5637-43e1-a20f-fba42f23fcc2', '66352fcd-f064-4480-bb1c-fcc550b2ba2f', 'a8149796-eb25-45a8-b128-478e1df5f5cb',
    'e415b929-1cb8-4195-b636-009a55a2abb9', '3cc02e0a-c906-455c-a685-68749994053b', '45b3bfe0-f710-4cc9-9829-359df7e9db0d',
    '3176b576-ed93-429a-b114-5ca79c7c89cc', 'df8cdff0-3508-4c25-982c-56c8ba97e4db', '9fdd7fb5-93ae-47bb-a818-8dafe44536bb',
    'c4772108-f87a-4a4b-b511-d4eb57b68db1', '0753e4b7-ecd7-48d7-b035-b8b634929cb3', 'f7c75842-5c14-4d12-9aff-a51059c4171f',
    'f549ed2a-1ca6-4f2b-ad3a-b8cfcc5f02c2', 'a8998dd7-01a4-4e0b-b426-938ace44777d', 'e8b81871-68ef-4587-b57a-ffba58fa3320',
    'b7e7348a-30c1-44b8-a548-86850cfcc562', '22b3b68b-2e1f-4a79-bd2b-d391f042cb1d', 'cc5c2bf6-7a67-428e-b778-685e533e5a2d',
    'ac9bc539-4709-44ed-a42d-930774ae7d0c', '4791a976-21a5-4161-9274-d4e2c304b74a', 'e7f2d34c-38fe-4219-bfd8-50b755458848',
    '2a93dbc5-76bf-44ab-807a-0be507f3b14c', '1d44a88c-5668-49a8-8776-481097256239', '560a85bf-0102-44e9-9b27-12d59d5c1595',
    'c9a15265-aa63-48ab-80e9-cb1360d870c9', '06280e9d-d070-470a-b337-a32388012745', '34783045-8749-4069-b722-0a501686e82d',
    '0961bbdb-c6a6-495f-a328-a3d52816b9e6', '58ac1d4b-ce8c-4f59-8011-4aff4490a94e', '7afb8c00-8e80-4c17-8fff-0d8ec6a0538a',
    'bfec4353-9c17-4839-8ee3-b9dc0f69c756', '7b999db5-a488-453b-812c-4b583fb90b45', 'ce4c6677-ffe2-4f5f-8a6e-2e8649584d63',
    'b19b4eea-cd9c-4482-a997-22e862ba1ea8', '971cc5e1-eb7d-4542-831c-125201d86dad', '67f59323-8874-4c29-9b74-27a0e7fe2a4d',
    'd5291ca3-3792-4cc0-9e08-26b2ddb907dd', 'e27c898d-1b12-4730-aeca-51ad5684e0c5', '586d4be2-86fe-48e3-a5ce-44eb6681234d',
    'd2631e90-6198-49a7-b6ee-f986f04927f0', 'c467b200-38a4-40ae-9f6c-5dd7adfec7e2', '4b3f0715-d1da-448c-bd63-4c80e903a4c0',
    '60f9da70-7e03-4981-a88c-cd5fdd6db42e', 'f6eb9e9c-00ff-4bad-87bc-f765ab0f7e2c', '8d6b8da8-f2fc-4ea8-979c-5297f932eed7',
    '02e81b19-8d3d-4451-a5dd-916ccd7d112c', '22a13437-97d8-47c3-99b6-d1a1ae5f208f', '065ccde3-9ed2-4749-a999-74df82638afc',
    '83e33ea0-0d29-4756-8f1f-b304c97804fc', 'f18a875f-dca8-4d7a-b0bf-977f5c0ce884', '7680fb28-5927-4304-947f-5a007627cf08',
    'b1fff606-68cb-4aa6-b2d2-7b1e05467db5', '226fb3ad-aa83-49ef-aa2b-911391707ba7', '627141f6-b3b0-4b78-896b-420fb390a83a',
    '1633e605-a568-495e-9fda-767df060f696', '2cf7a4a1-e32c-482a-b747-7f06bafbe0e5', 'fc8c6d2c-12a5-4d97-b3ec-62cb3645251a',
    'c634af73-23c5-4d10-8bf3-13383bfb2bee', 'a005cf19-f035-4062-993d-381fdb27d95a', 'c2778ce8-f22a-455e-b51f-c6e8b945b233',
    '6f9c0117-68ea-47f9-80f7-36bb9be8da7c', '37b178f3-3625-44df-b180-2e3a2d82eea4', 'f48f96d6-5ebf-4866-af58-f10e8587a185',
    'f37f90b5-d4cf-4d17-85f3-968e241bf965', '24a69be6-f5db-415e-927c-c344d125bead', 'b90bb984-6aec-47af-b077-184549d452ca',
    'aa01cbf6-4e01-48c3-b837-4d3a5dbbc7c1', '0fdc2946-e589-4df9-8207-648192a15b20', '46478dfa-d55a-4b92-97d1-0df1b1da7863',
    '259965bd-f904-478a-aa0a-fd50ef9a8ad7', 'c413ceb0-070f-43c3-9a24-d5a95fc23167', '3aaea6de-9a06-469f-93e1-acff2546a6d2',
    'be81f6d5-d992-44e8-a5fb-00b8cf975523', '7fdd30ae-6edb-4912-83ad-c38e9bf8ec3f', 'fc2e2004-3c44-4263-96d6-ac2e822f31c7',
    '062cbea8-431d-439c-87ff-5ab0e5134753', '9410a647-172d-4b11-a2b2-3775990cab0d', 'b9fc1d01-32c1-4226-b403-4ee3da75dda9',
    '15ba0157-c158-44eb-a2ed-a0f4021bff96', '82716bd3-7049-48bf-bd5f-515b1c99b04d', 'dbc5d99e-1c1b-47a2-aa6b-8858a2d33fe0',
    '06489a0e-0645-4992-9fc2-a681af07cbed', '7faec3dc-6584-42b5-b9d4-2c9c24649277', 'c32dd238-7249-4fd4-ba62-561f608f13dc',
    '4a7478e4-307a-428b-9af2-c502f996a05c']

let potionsID = ['77d3155a-0ce6-4647-a32a-84cd5ffd9d88', 'f2a07d99-7f2c-4b40-9153-d369b4339f07', '34f3593e-cf86-45d5-a1f9-045d2c4e2aa6',
    '05f612ec-f688-4ef9-8958-726f17b45456', 'b6ecac42-4c5a-4147-b8e8-ec2e647adb8d', 'a2ef5d5c-314f-4074-a12b-76a7bac420d3',
    '5262d2e0-565b-442f-9c45-db53fb147537', '12a02a7e-52b3-460a-aa28-cd02b85fa9f0', 'a410ad71-8655-4626-a888-ea822c010b88',
    'e529b4d6-2fbb-47e6-b815-33af49ce9d72', '6ab33fc5-429b-43b1-9997-1372140aad6c', '03ab8303-17b0-4d20-ae3f-71fb9bda5d7a',
    'f0eae85f-2a28-42ba-9aea-1a2ea43312e6', '0ab9c9aa-05c5-42c7-ad39-3099c3a0b82c', '9d18de2e-b95a-4317-8be0-cbca1f092dce',
    '19c45b5d-ae91-42c6-acf9-619b4417b201', 'a926ff91-5d46-42b9-970f-e8c245b839f1', '8bca8bba-3569-4df4-976f-c1368cc44d9e',
    'fa2a561e-96a0-4dc7-bbd9-901cbb861423', '66bbc6a2-9a55-4c39-8993-c95d54c6e273', '28c1c946-f320-422e-a911-17ca1216f692',
    '4323da02-feaf-4591-acc5-73ac57c49c2d', '35c62697-0621-4378-b5de-004eb05b9a95', '19dec383-dd45-44da-9e6b-309671561918',
    '3b468a6f-84af-451a-8b54-fac1aa120934', 'dc7e407f-d11c-466e-b72f-0037000d2f04', '546b53bf-fae3-41a5-85a4-b3ac34988894',
    '60c438af-2e16-4ef7-8d21-fac210e2c4a9', '06eef71e-35a7-42b5-b5e5-df72696afd19', '8a9d6c70-e01f-4774-befa-e92d4c139bca',
    '3f456180-4b41-40f2-b320-e3e68f8ace3d', 'e5df7ef6-d118-40f6-83b3-a498906c14cf', 'abcbc7c8-d90a-4d4e-97d4-001834c72d41',
    '0f515db2-c46f-421f-8800-26734de50bd4', 'b5d95a99-29b6-4809-a6d4-bba069935b53', '429727be-e85a-46e8-b614-f79ced82ceab',
    '01756d5e-7c65-481d-8c32-7efe7f9664e3', 'b9adec85-c607-4280-8368-c2174e5e7e98', '48a2607b-76b1-4d4c-87c8-d24aeba70185',
    'b68c17ce-d07a-4d29-a243-b0d9f2d6e5c2', 'aa5cad21-d5f5-44cc-b2b9-7f9a290a864b', '2ca9c8b1-efb9-4f51-9643-337ad92125ae',
    '95345b5a-e1e6-4f22-b946-db8aa97505bb', '1c6db888-23f9-4d06-bdbd-929bf9dffe56', '2a049c88-4472-4a31-9868-ef89e28339fb',
    '6abd33e1-460f-48b1-9609-4397e4b2ac5d', 'fb95b8c6-b8af-4c40-9347-81ea2941d658', '7f8747bb-73f6-4189-ad6d-5209058f0f91',
    '4125bd4f-19e2-4440-8f31-a78088d1915e', 'f0a560a1-89dc-4730-bc0f-fb46cf0c4647', '92622710-8e3a-4cfb-9523-69b1465f7a3c',
    'be27a166-701e-472d-9bb0-47aa6061dd91', '6b092425-62f1-4a53-9cf9-a54ff5a1bc2e', '1a49ca40-b679-4e3f-95bf-9d0034acd38e',
    '05cc6194-24b7-4008-a0bd-f344bc15d9f6', '6a2a4208-031e-42ad-b79b-4b05639bcd1b', 'fd0ce55b-4ec7-4dda-9a67-e8aedf5a58b2',
    '017ef322-3bec-42c7-b10a-4ed04be2fe08', 'fac4901b-fa7c-4d86-b8ba-5e4c7b7efa53', '21711b7e-2473-4035-a230-533ed7580763',
    '8f1d240c-c79d-4e7c-a253-3912c59983ef', '03c01583-8c9a-4c70-b217-73da1d78c14c', 'd06d83c7-4efe-46fd-b5c2-dae6207f6ebb',
    '70295347-508c-41b2-bc42-24c1f0dd0078', '5ac593af-5784-4f85-b3d3-239ca9777f45', 'a277874a-4a37-4f6a-a529-72b4f1c2465a',
    '1324bbf9-f379-42f9-87b1-3e454f38e305', '144fd7e5-daa0-41d3-82c3-f3b0facc7e70', 'b79ef024-35a9-4584-b099-73c0b7436752',
    '9172a9d7-e166-46c2-b4ce-587e891faadb', '676d92ef-f07e-4de3-bfa2-edb8eff778d0', '610e4d28-ef1f-4e7e-b741-392510fa2416',
    '7fd371a6-f481-4947-b88c-deea591ce5fa', '8c1def24-dad0-4c37-85df-c81a932856f4', '2243d586-3b5c-46e6-8db9-bbcadd25663b',
    '2e8e0911-d72f-4cc6-8031-59f4d993365b', '1279f195-f96c-444e-bc17-588cfe20caec', 'a38a9b21-9047-4f0f-b74c-5ee4204d4a21',
    '6c7e9a07-d45c-4748-89d2-de9767f00a09', 'a0364a75-5aa6-4bf7-9beb-48ca14f8dfaa', 'ebc889ce-aeec-4552-a216-cb6d37d08427',
    'c50856bd-6216-4634-bf69-fb4e8a98a41f', 'f47b19b9-8093-4ac6-ae90-119d74eb9f18', '7467b6c6-bb4a-486e-a87f-3bc7057970e9',
    '1c9a0756-11b8-4c11-8638-9cc9197a1f26', 'fa9eeeb0-3714-46a7-8e2c-093228c50d3d', '392a1cc3-16b6-4297-93df-c0705e339a61',
    '7dbced3c-cc4f-4f80-b543-78dfbf7669f2', '6b76fba9-0545-47dd-8704-84b06942c5b6', '53f49654-27d5-458c-9a6d-295902975609',
    'cdd9f5c3-96a8-4d8f-9ef5-58db009c4578', 'edd5fbee-6040-4115-9023-4b6e156b0cc5', 'c03536b9-11b0-4597-89f3-efea52b7ffc1',
    'db90f763-9188-411d-90fa-fbce87297b25', '22759cd7-30c8-49ce-8b73-463c3f488706', '0b998c5a-6ba1-4268-80c8-f06c301f779a',
    '14447a7c-c89b-49e6-bf92-ac3039ac4467', 'f3e6c829-e494-43f7-8e9e-910540f87d7d', 'e44da2b3-db5a-4554-a5d8-75641fc92d21', 
    '0dbbb97f-e1c2-453d-8105-13618e8e8bf9']

// async function loadCharacters() {
//     let mainDiv = document.querySelector('#characters')
//     let container = document.createElement('div')
//     let detailDiv = document.createElement('div')
//     let details = document.createElement('p')
//     let img = document.createElement('img')
    
//     detailDiv.style.textAlign = 'left'
//     detailDiv.style.paddingLeft = '2rem'
    

//     container.classList.add('card')
    
//     i = 6
//     while (i != 0) {
//         let position = Math.floor(Math.random()*charactersID.length)
//         if (charactersID.length != 0) {
//             let selectID = charactersID[position]
//             charactersID.splice(position, 1)
//             url = `https://api.potterdb.com/v1/characters/${selectID}`
//             let data = (await (await fetch(url)).json()).data
//             console.log(data)
            
//             let name = data.attributes.name
//             let species = await data.attributes.species
//             let image = await data.attributes.image
//             details.innerHTML = `<br><b>Name:</b> ${name} <br><b>Species:</b> ${species}`

//             detailDiv.insertAdjacentElement('beforeend', details)
//             container.insertAdjacentElement('beforeend', img)
//             container.insertAdjacentElement('beforeend', detailDiv)
                    
//             mainDiv.insertAdjacentElement('beforeend', container)
            
//             container.addEventListener('click', () => {
//             window.location.href = `/dataCatch/showdetail.html?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`;
//             })
//         }
//         else {
//             i = 0
//         }
        
//         i--
//     }   
// }




async function loadCharacters() {
    let mainDiv = document.querySelector('#characters button');

    let i = 8;
    while (i != 0) {
        if (charactersID.length != 0) {
            // Generate a random position and fetch character details
            let position = Math.floor(Math.random() * charactersID.length);
            let selectID = charactersID[position];
            charactersID.splice(position, 1);

            let url = `https://api.potterdb.com/v1/characters/${selectID}`;
            let data = (await (await fetch(url)).json()).data;

            // Create new elements for each character
            let container = document.createElement('div');
            let detailDiv = document.createElement('div');
            let details = document.createElement('p');
            let img = document.createElement('img');

            container.classList.add('card');
            detailDiv.style.textAlign = 'left';
            detailDiv.style.paddingLeft = '2rem';

            // Extract character details
            let name = data.attributes.name;
            let species = data.attributes.species || 'Unknown'; // Default if species is null/undefined
            let image = data.attributes.image;

            details.innerHTML = `<b>Name:</b> ${name} <br><b>Species:</b> ${species}`;
            if (image == null) {
                continue;
            } else {
                img.src = image;
            }
            

            // Append details and image to the container
            detailDiv.insertAdjacentElement('beforeend', details);
            container.insertAdjacentElement('beforeend', img);
            container.insertAdjacentElement('beforeend', detailDiv);
                    
            

            // Append the container to the main div
            mainDiv.insertAdjacentElement('beforebegin', container);

            // Add click event listener for navigation
            container.addEventListener('click', () => {
                window.location.href = `/dataCatch/showdetail.html?type=characters&id=${encodeURIComponent(selectID)}`;
            });
        } else {
            i = 0; // Exit loop if charactersID is empty
        }

        i--;
    }
}


async function loadSpells() {
    let mainDiv = document.querySelector('#spells button');

    let i = 8;
    while (i != 0) {
        if (spellsID.length != 0) {
            // Generate a random position and fetch character details
            let position = Math.floor(Math.random() * spellsID.length);
            let selectID = spellsID[position];
            spellsID.splice(position, 1);

            let url = `https://api.potterdb.com/v1/spells/${selectID}`;
            let data = (await (await fetch(url)).json()).data;

            // Create new elements for each character
            let container = document.createElement('div');
            let detailDiv = document.createElement('div');
            let details = document.createElement('p');
            let img = document.createElement('img');

            container.classList.add('card');
            detailDiv.style.textAlign = 'left';
            detailDiv.style.paddingLeft = '2rem';

            // Extract character details
            let name = data.attributes.name
            let effect = data.attributes.effect || 'Unknown'; // Default if species is null/undefined
            let image = data.attributes.image;

            details.innerHTML = `<b>Name:</b> ${name} <br><b>Effect:</b> ${effect}`;
            if (image == null) {
                continue;
            } else {
                img.src = image;
            }
            

            // Append details and image to the container
            detailDiv.insertAdjacentElement('beforeend', details);
            container.insertAdjacentElement('beforeend', img);
            container.insertAdjacentElement('beforeend', detailDiv);
                    
            

            // Append the container to the main div
            mainDiv.insertAdjacentElement('beforebegin', container);

            // Add click event listener for navigation
            container.addEventListener('click', () => {
                window.location.href = `/dataCatch/showdetail.html?type=spells&id=${encodeURIComponent(selectID)}`;
            });
        } else {
            i = 0; // Exit loop if charactersID is empty
        }

        i--;
    }
}

async function loadMovies() {
    let mainDiv = document.querySelector('#movies button');

    let i = 8;
    while (i != 0) {
        if (moviesID.length != 0) {
            // Generate a random position and fetch character details
            let position = Math.floor(Math.random() * moviesID.length);
            let selectID = moviesID[position];
            moviesID.splice(position, 1);

            let url = `https://api.potterdb.com/v1/movies/${selectID}`;
            let data = (await (await fetch(url)).json()).data;

            // Create new elements for each character
            let container = document.createElement('div');
            let detailDiv = document.createElement('div');
            let details = document.createElement('p');
            let img = document.createElement('img');

            container.classList.add('card');
            detailDiv.style.textAlign = 'left';
            detailDiv.style.paddingLeft = '2rem';

            // Extract character details
            let name = data.attributes.title
            // let effect = data.attributes.effect || 'Unknown'; // Default if species is null/undefined
            let image = data.attributes.poster;

            details.innerHTML = `<b>Name:</b> ${name}`;
            if (image == null) {
                continue;
            } else {
                img.src = image;
            }
            

            // Append details and image to the container
            detailDiv.insertAdjacentElement('beforeend', details);
            container.insertAdjacentElement('beforeend', img);
            container.insertAdjacentElement('beforeend', detailDiv);
                    
            

            // Append the container to the main div
            mainDiv.insertAdjacentElement('beforebegin', container);

            // Add click event listener for navigation
            container.addEventListener('click', () => {
                window.location.href = `/dataCatch/showdetail.html?type=movies&id=${encodeURIComponent(selectID)}`;
            });
        } else {
            i = 0; // Exit loop if charactersID is empty
        }

        i--;
    }
}


async function loadBooks() {
    let mainDiv = document.querySelector('#books button');

    let i = 7;
    while (i != 0) {
        if (booksID.length != 0) {
            // Generate a random position and fetch character details
            let position = Math.floor(Math.random() * booksID.length);
            let selectID = booksID[position];
            booksID.splice(position, 1);
            
            let url = `https://api.potterdb.com/v1/books/${selectID}`;
            let data = (await (await fetch(url)).json()).data;

            // Create new elements for each character
            let container = document.createElement('div');
            let detailDiv = document.createElement('div');
            let details = document.createElement('p');
            let img = document.createElement('img');
            
            container.classList.add('card');
            detailDiv.style.textAlign = 'left';
            detailDiv.style.paddingLeft = '2rem';
            
            // Extract character details
            let name = data.attributes.title
            // let effect = data.attributes.effect || 'Unknown'; // Default if species is null/undefined
            let image = data.attributes.cover;

            details.innerHTML = `<b>Name:</b> ${name}`;
            
            if (image == null) {
                continue;
                
            } else {
                img.src = image;
            }
            

            // Append details and image to the container
            detailDiv.insertAdjacentElement('beforeend', details);
            container.insertAdjacentElement('beforeend', img);
            container.insertAdjacentElement('beforeend', detailDiv);
                    
            

            // Append the container to the main div
            mainDiv.insertAdjacentElement('beforebegin', container);

            // Add click event listener for navigation
            container.addEventListener('click', () => {
                window.location.href = `/dataCatch/showdetail.html?type=books&id=${encodeURIComponent(selectID)}`;
            });

        } else {
            i=0; 
            break;// Exit loop if charactersID is empty
        }

        i--;
    }
}

async function loadPotions() {
    let mainDiv = document.querySelector('#potions button');

    let i = 7;
    while (i != 0) {
        if (potionsID.length != 0) {
            // Generate a random position and fetch character details
            console.log('potion')
            let position = Math.floor(Math.random() * potionsID.length);
            let selectID = potionsID[position];
            potionsID.splice(position, 1);

            let url = `https://api.potterdb.com/v1/potions/${selectID}`;
            let data = (await (await fetch(url)).json()).data;

            // Create new elements for each character
            let container = document.createElement('div');
            let detailDiv = document.createElement('div');
            let details = document.createElement('p');
            let img = document.createElement('img');

            container.classList.add('card');
            detailDiv.style.textAlign = 'left';
            detailDiv.style.paddingLeft = '2rem';

            // Extract character details
            let name = data.attributes.title
            // let effect = data.attributes.effect || 'Unknown'; // Default if species is null/undefined
            let image = data.attributes.image;

            details.innerHTML = `<b>Name:</b> ${name}`;
            if (image == null) {
                continue;
            } else {
                img.src = image;
            }
            

            // Append details and image to the container
            detailDiv.insertAdjacentElement('beforeend', details);
            container.insertAdjacentElement('beforeend', img);
            container.insertAdjacentElement('beforeend', detailDiv);
                    
            

            // Append the container to the main div
            mainDiv.insertAdjacentElement('beforebegin', container);

            // Add click event listener for navigation
            container.addEventListener('click', () => {
                window.location.href = `/dataCatch/showdetail.html?type=potions&id=${encodeURIComponent(selectID)}`;
            });

        } else {
            i=0; 
            break;// Exit loop if charactersID is empty
        }
        
        i--;
    }
}


// async function load() {
//     url = 'https://api.potterdb.com/v1/potions'
//     res = (await (await fetch(url)).json()).data
//     arr = []
//     for (let i=0; i<res.length; i++) {
//         arr.splice(0,0,res[i].id)
//     }
//     console.log(arr)
// }


changeHeaderHeight()

searchButton.addEventListener('click', () => {
    handleSearch();
})



for (let item of loadMore) {
    if (item.parentElement.id == 'characters') {
        item.addEventListener('click', () => {
            loadCharacters();
        })
    } else if (item.parentElement.id == 'spells') {
        item.addEventListener('click', () => {
            loadSpells();
        })
    } else if (item.parentElement.id == 'movies') {
        item.addEventListener('click', () => {
            loadMovies();
        })
    } else if (item.parentElement.id == 'books') {
        item.addEventListener('click', () => {
            loadBooks();
        })
    } else if (item.parentElement.id == 'potions') {
        item.addEventListener('click', () => {
            loadPotions();
        })
    }
    
}
    

window.onload = function () {
    loadCharacters();
    loadBooks();
    loadMovies();
    loadPotions();
    loadSpells();
}