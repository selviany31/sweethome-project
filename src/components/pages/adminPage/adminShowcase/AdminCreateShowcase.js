import React, { useState, useEffect } from "react";
import "./AdminCreateShowcase.scss";
import img_browser from "./img/Gallery.png";
import x_icon from './img/Cross 16px.png'
import { Link } from 'react-router-dom'
import { VscChevronRight } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux'
import * as ActionShowcase from '../../../../redux/action/ShowcaseAction'
import * as ActionCustomer from '../../../../redux/action/CustomerAction'
import { getProjectType } from '../../../../redux/action/AdminProjectAction'
import Select from 'react-select'


export default function AdminCreateShowcase() {

    const dispatch = useDispatch()

    const [projectId, setProjectId] = useState([])
    const [title, setTitle] = useState('')

    const handleClick = (e) => {
        setProjectId(e.target.value)
    }

    const getCustomers = useSelector((state) => state.customerReducer.customers)
    const getShowcases = useSelector((state) => state.showcaseReducer.showcases)

    const getUploadImg = useSelector((state) => state.showcaseReducer.galery) //state menampung image
    const getProjectTypeList = useSelector((state) => state.adminProject.projectType)

    const fetchingShowcase = () => {
        dispatch(ActionShowcase.getShowcaseList())
        dispatch(ActionCustomer.getCustomerList())
        dispatch(getProjectType())

    }
    const [imageData, setImageData] = useState([{ galery: null }]); // ini fungsinya untuk dimasukin ke body
    const [imageURL, setImageURL] = useState(null); // ini fungsinya untuk mendisplay image setelah di select dari storage
    //data lain2
    // const [workInclude, setworkInclude] = useState(null);
    // const [style, setstyle] = useState(null);


    const projectDetail = getShowcases.data && getShowcases.data.filter(item => item.project._id === projectId)[0]
    const userId = projectDetail && projectDetail.project.user._id
    const customerDetail = getCustomers.data && getCustomers.data.filter(item => item._id === userId)[0]
    const idProjectTypes = projectDetail && projectDetail.projectTypes.map((item) => item._id)
    const idStyles = projectDetail && projectDetail.styles.map((item) => item._id)
    const idLocations = projectDetail && projectDetail.locations.map((item) => item._id)

    //get style category by id project
    const styleOptions = projectDetail && projectDetail.styles.map(item => ({ value: item.name, label: item.name }))

    const workInclude = getProjectTypeList.data && getProjectTypeList.data.map((item) => ({ value: item._id, label: item.name }))

    const galleryData = [{
        photo: getUploadImg,
        title: title,
    }]

    const onCreate = (e) => {
        e.preventDefault()
        const data = {
            name: projectDetail.name,
            address: projectDetail.address,
            showcaseType: projectDetail.showcaseType._id,
            project: projectDetail.project._id,
            projectTypes: idProjectTypes,
            styles: idStyles,
            locations: idLocations,
            gallery: galleryData,

        }
        console.log(data)
        dispatch(ActionShowcase.createShowcase(data))
    };

    useEffect(() => {
        fetchingShowcase()
        // eslint-disable-next-line
    }, [dispatch])

    useEffect(() => {
        let formData = new FormData()
        formData.append('galery', imageData.galery)
        dispatch(ActionShowcase.uploadImage(formData))
        // eslint-disable-next-line
    }, [dispatch, imageData])

    function numFormat(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    console.log("getProjectTypeList", getProjectTypeList)
    return (
        <div className="create_showcase_body">
            <div className="create_showcase_container">
                <h3>Create Showcase</h3>
                <div className="showcase_breadcrumb">
                    <Link to="/">Home</Link>
                    <VscChevronRight style={{
                        margin: "0 0.5rem",
                        color: "#828282",
                    }} />
                    <Link to="/admin/showcase">Showcase</Link>
                    <VscChevronRight style={{
                        margin: "0 0.5rem",
                        color: "#828282",
                    }} />
                    <Link to="/admin/showcase/create-showcase" style={{ fontWeight: "bold", color: "#214457" }}> Create Showcase</Link>
                </div>

                <div className="create_showcase_content">
                    <div className="create_showcase_content_1">
                        <label className="label_showcase">
                            Project<span className="span_showcase">*</span>
                        </label>
                        <select defaultValue={'DEFAULT'} className="select_showcase_type_1" onChange={handleClick}>
                            <option value='DEFAULT' disabled >
                                Please Select
                            </option>
                            {!getShowcases.length ? getShowcases.data && getShowcases.data.map((showcase, index) => (
                                <option key={index} value={showcase.project._id} defaultValue={showcase}>
                                    {showcase.project.user.firstname} {showcase.project.user.lastname} - {showcase.project.ticket}
                                </option>
                            )
                            ) : <option disabled></option>}
                        </select>
                    </div>

                    {customerDetail &&
                        <>
                            <div className="create_showcase_content_2">
                                <img src={customerDetail.photo} alt="prof_pic" />
                                <div className="showcase_profpic_detail">
                                    <div>
                                        <span>Name</span>
                                        <p>{customerDetail.firstname} {customerDetail.lastname}</p>
                                    </div>
                                    <div>
                                        <span>Phone</span>
                                        <p>{customerDetail.phone}</p>
                                    </div>
                                    <div>
                                        <span>Email</span>
                                        <p>{customerDetail.email}</p>
                                    </div>
                                </div>

                                <div className="showcase_detail_project">
                                    {projectDetail &&
                                        <>
                                            <div>
                                                <div>
                                                    <span>Total Price</span>
                                                    <p>Rp. {numFormat(projectDetail.project.totalPrice)}</p>
                                                </div>
                                                <div>
                                                    <span>Total Duration</span>
                                                    <p>{projectDetail.project.totalDuration} Weeks</p>
                                                </div>
                                            </div>
                                            <div>
                                                <span>Address</span>
                                                <p>{projectDetail.address}</p>
                                            </div>
                                            <div>
                                                <span>Related Appointment</span>
                                                <p style={{ textDecoration: "underline" }}>{projectDetail.project.ticket}</p>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>

                            <div className="create_showcase_content_3">
                                <div>
                                    <label className="label_showcase">
                                        Work Included<span className="span_showcase">*</span>
                                    </label>
                                    <Select
                                        className="select_showcase_type_2"
                                        options={workInclude}
                                        isMulti
                                        name="colors"
                                    />
                                </div>
                                <div>
                                    <label className="label_showcase">
                                        Styles<span className="span_showcase">*</span>
                                    </label>
                                    <Select
                                        className="select_showcase_type_2"
                                        defaultValue={styleOptions}
                                        isMulti
                                        name="color"
                                        options={styleOptions}
                                        classNamePrefix="select"
                                    />
                                </div>
                            </div>

                            <div className="create_showcase_content_4">
                                <label className="label_showcase">Gallery</label>

                                {!imageURL ? (
                                    <div>
                                        <input
                                            type="file"
                                            id="upload"
                                            hidden
                                            onChange={(event) => {
                                                setImageData({ galery: event.target.files[0] });
                                                setImageURL(URL.createObjectURL(event.target.files[0]));
                                            }}
                                        />
                                        <label className="custom_upload_file" htmlFor="upload">
                                            <img src={img_browser} alt="img_browser"></img>
                                            <p>Upload Image</p>
                                        </label>
                                    </div>
                                ) : (
                                    <div>

                                        <div className="custom_upload_file--selected">
                                            <div>
                                                <img src={imageURL} alt="" />
                                                <button onClick={() => setImageURL(null)}> <img src={x_icon} alt="" /></button>

                                                <input
                                                    type="file"
                                                    id="upload"
                                                    hidden
                                                    onChange={(event) => {
                                                        setImageData({ galery: event.target.files[0] });
                                                        setImageURL(URL.createObjectURL(event.target.files[0]));
                                                    }}
                                                />
                                                <label className="label_showcase">
                                                    Title<span className="span_showcase">*</span>
                                                </label>
                                                <input type="text" name="" id="" onChange={(e) => setTitle(e.target.value)} />
                                            </div>
                                        </div>

                                        <label className="custom_upload_file" htmlFor="upload">
                                            <img src={img_browser} alt="img_browser"></img>
                                            <p>Upload Image</p>
                                        </label>

                                    </div>

                                )}
                            </div>
                        </>
                    }


                </div>
                <div className="box_for_btn_create_showcase">
                    <button onClick={onCreate}> Create Showcase</button>
                </div>
            </div>
        </div >
    );
}
