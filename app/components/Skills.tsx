const Skills = () => {
    return (
        <section>
            <div className="flex justify-center py-5">
                <div className="my_fixed_width">
                    <h2 className="text-2xl font-bold font-clash">
                        Skills
                        <span className="inline-block animate-bounce">🤹</span>
                    </h2>
                    <p className="text-sm text-[#808e91] font-rubik my-3">
                        These are some of the skills I’ve learnt over the past
                        years.
                    </p>
                    <div className="grid place-items-center my-5 gap-5 md:grid-cols-3 ">
                      <div className="w-full flex items-center relative overflow-hidden px-5 p-4 bg-[#0a1c20] block_left">
                        <div>
                          <p className="text-[0.9rem]">HTML</p>
                        </div>
                      </div>
                      <div className="w-full flex items-center relative overflow-hidden px-5 p-4 bg-[#0a1c20] block_right">
                        <div>
                          <p className="text-[0.9rem]">CSS</p>
                        </div>
                      </div>
                      <div className="w-full flex items-center relative overflow-hidden px-5 p-4 bg-[#0a1c20] block_left">
                        <div>
                          <p className="text-[0.9rem]">JavaScript</p>
                        </div>
                      </div>
                      <div className="w-full flex items-center relative overflow-hidden px-5 p-4 bg-[#0a1c20] block_left">
                        <div>
                          <p className="text-[0.9rem]">Firebase</p>
                        </div>
                      </div>
                      <div className="w-full flex items-center relative overflow-hidden px-5 p-4 bg-[#0a1c20] block_left">
                        <div>
                          <p className="text-[0.9rem]">ReactJs</p>
                        </div>
                      </div>
                      <div className="w-full flex items-center relative overflow-hidden px-5 p-4 bg-[#0a1c20] block_left">
                        <div>
                          <p className="text-[0.9rem]">TailwindCSS</p>
                        </div>
                      </div>
                      <div className="w-full flex items-center relative overflow-hidden px-5 p-4 bg-[#0a1c20] block_left">
                        <div>
                          <p className="text-[0.9rem]">Bootstrap</p>
                        </div>
                      </div>
                      <div className="w-full flex items-center relative overflow-hidden px-5 p-4 bg-[#0a1c20] block_left">
                        <div>
                          <p className="text-[0.9rem]">Git/Github</p>
                        </div>
                      </div>
                      <div className="w-full flex items-center relative overflow-hidden px-5 p-4 bg-[#0a1c20] block_left">
                        <div>
                          <p className="text-[0.9rem]">Annimations</p>
                        </div>
                      </div>
                      <div className="w-full flex items-center relative overflow-hidden px-5 p-4 bg-[#0a1c20] block_left">
                        <div>
                          <p className="text-[0.9rem]">SEO</p>
                        </div>
                      </div>
                      <div className="w-full flex items-center relative overflow-hidden px-5 p-4 bg-[#0a1c20] block_left">
                        <div>
                          <p className="text-[0.9rem]">...</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Skills;
